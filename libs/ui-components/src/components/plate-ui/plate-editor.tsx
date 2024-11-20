'use client';

import { Plate } from '@udecode/plate-common/react';

import { useCreateEditor } from './use-create-editor';
import { Editor, EditorContainer } from './editor';

export function PlateEditor() {
  const editor = useCreateEditor();

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor variant="demo" placeholder="Type..." />
      </EditorContainer>
    </Plate>
  );
}