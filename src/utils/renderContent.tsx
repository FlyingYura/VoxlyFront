import React from 'react';

const INLINE_PATTERN = /(\*\*[^*]+\*\*|`[^`]+`)/g;

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  return text
    .split(INLINE_PATTERN)
    .filter((part) => part.length > 0)
    .map((part, i) => {
      const key = `${keyPrefix}-${i}`;
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={key}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={key} className="content-code">{part.slice(1, -1)}</code>;
      }
      return <React.Fragment key={key}>{part}</React.Fragment>;
    });
}

type Block =
  | { kind: 'h2' | 'h3' | 'h4'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'ul' | 'ol'; items: string[] }
  | { kind: 'quote'; text: string }
  | { kind: 'table'; rows: string[][] };

function parseBlocks(content: string): Block[] {
  const lines = content.split('\n');
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: { kind: 'ul' | 'ol'; items: string[] } | null = null;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ kind: 'p', text: paragraph.join(' ') });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list) {
      blocks.push(list);
      list = null;
    }
  };

  const flushAll = () => {
    flushParagraph();
    flushList();
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushAll();
      continue;
    }

    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    const h4 = line.match(/^####\s+(.+)$/);
    if (h2) {
      flushAll();
      blocks.push({ kind: 'h2', text: h2[1] });
      continue;
    }
    if (h3) {
      flushAll();
      blocks.push({ kind: 'h3', text: h3[1] });
      continue;
    }
    if (h4) {
      flushAll();
      blocks.push({ kind: 'h4', text: h4[1] });
      continue;
    }

    if (/^\|.+\|$/.test(line)) {
      flushAll();
      const cells = line.split('|').slice(1, -1).map((c) => c.trim());
      const last = blocks[blocks.length - 1];
      if (last && last.kind === 'table') {
        if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) {
          last.rows.push(cells);
        }
      } else {
        blocks.push({ kind: 'table', rows: [cells] });
      }
      continue;
    }

    if (/^>\s?/.test(line)) {
      flushAll();
      blocks.push({ kind: 'quote', text: line.replace(/^>\s?/, '') });
      continue;
    }

    const bullet = line.match(/^[-*•]\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      if (!list || list.kind !== 'ul') {
        flushList();
        list = { kind: 'ul', items: [] };
      }
      list.items.push(bullet[1]);
      continue;
    }

    const numbered = line.match(/^\d+[.)]\s+(.+)$/);
    if (numbered) {
      flushParagraph();
      if (!list || list.kind !== 'ol') {
        flushList();
        list = { kind: 'ol', items: [] };
      }
      list.items.push(numbered[1]);
      continue;
    }

    flushList();

    // Рядок, що виглядає як підзаголовок: короткий, закінчується на ":"
    if (line.length <= 80 && line.endsWith(':') && !/[.!?…]$/.test(line.slice(0, -1))) {
      flushParagraph();
      blocks.push({ kind: 'h4', text: line.slice(0, -1) });
      continue;
    }

    paragraph.push(line);
  }

  flushAll();
  return blocks;
}

export function renderCourseContent(content: string): React.ReactNode {
  const blocks = parseBlocks(content);

  return blocks.map((block, i) => {
    const key = `block-${i}`;
    switch (block.kind) {
      case 'h2':
        return <h2 key={key} className="content-h2">{renderInline(block.text, key)}</h2>;
      case 'h3':
        return <h3 key={key} className="content-h3">{renderInline(block.text, key)}</h3>;
      case 'h4':
        return <h4 key={key} className="content-h4">{renderInline(block.text, key)}</h4>;
      case 'p':
        return <p key={key}>{renderInline(block.text, key)}</p>;
      case 'ul':
        return (
          <ul key={key} className="content-list">
            {block.items.map((item, j) => (
              <li key={j}>{renderInline(item, `${key}-${j}`)}</li>
            ))}
          </ul>
        );
      case 'ol':
        return (
          <ol key={key} className="content-list content-list-ordered">
            {block.items.map((item, j) => (
              <li key={j}>{renderInline(item, `${key}-${j}`)}</li>
            ))}
          </ol>
        );
      case 'quote':
        return (
          <blockquote key={key} className="content-quote">
            {renderInline(block.text, key)}
          </blockquote>
        );
      case 'table':
        return (
          <div key={key} className="content-table-wrap">
            <table className="content-table">
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) => (
                      <td key={k}>{renderInline(cell, `${key}-${j}-${k}`)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  });
}
