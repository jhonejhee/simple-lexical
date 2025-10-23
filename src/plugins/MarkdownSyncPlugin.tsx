import { useEffect, useRef } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { $convertFromMarkdownString, $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';

interface MarkdownSyncPluginProps {
  markdown: string;
  onMarkdownChange: (markdown: string) => void;
  loadOnce?: boolean;
  objectId?: string | number | null;
}

// eslint-disable-next-line
export default function MarkdownSyncPlugin({
  markdown,
  onMarkdownChange,
  loadOnce,
  objectId,
}: MarkdownSyncPluginProps) {
  const [editor] = useLexicalComposerContext();
  const lastId = useRef<string | number | null>(null);

  useEffect(() => {
    if (!objectId || (loadOnce && objectId === lastId.current)) return;
    lastId.current = objectId;

    editor.update(() => {
      $convertFromMarkdownString(markdown || '', TRANSFORMERS);
    });
  }, [editor, markdown, objectId]);

  return (
    <OnChangePlugin
      onChange={(editorState) => {
        editorState.read(() => {
          const md = $convertToMarkdownString(TRANSFORMERS);
          onMarkdownChange(md);
        });
      }}
    />
  );
}
