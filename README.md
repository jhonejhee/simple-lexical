# simple-lexical


## Acknowledgements

A simple, lightweight component inspired by [Facebook's Lexical](https://github.com/facebook/lexical), which is licensed under MIT. 
This project provides a minimal, watered-down version for easier integration and experimentation.

---

## Features

- Lightweight and easy to use
- React-based
- Supports basic editor functionality
- Inspired by Facebook Lexical, but simplified for smaller use cases

---

## Peer Dependencies

This package relies on a few libraries that must be installed in your project before using `@jhonejhee/simple-lexical`. These are **not installed automatically**.

- [`lexical`](https://www.npmjs.com/package/lexical)
- [`@lexical/code-shiki`](https://www.npmjs.com/package/@lexical/code-shiki)
- [`@lexical/file`](https://www.npmjs.com/package/@lexical/file)
- [`@lexical/markdown`](https://www.npmjs.com/package/@lexical/markdown)
- [`@lexical/react`](https://www.npmjs.com/package/@lexical/react)
- [`@lexical/rich-text`](https://www.npmjs.com/package/@lexical/rich-text)
- [`@lexical/utils`](https://www.npmjs.com/package/@lexical/utils)

---

## How to Use

1. Install `@jhonejhee/simple-lexical`:

```bash
npm install @jhonejhee/simple-lexical
```

2. Install all dependencies:

```bash
npm install lexical @lexical/code-shiki @lexical/file @lexical/markdown @lexical/react @lexical/rich-text @lexical/utils
```

3. Import `LexicalEditor` component in your app:

```tsx
import LexicalEditor from "@jhonejhee/simple-lexical";
```

4. Render the component

```tsx
export function App() {

  const handleEditorChange = (content: string) => {
    // set content to your state
    console.log(content);
  };

  return (
    <>
      <LexicalEditor
        markdownText={document.text}
        handleEditorChange={handleEditorChange}
        loadOnce={true}
        objectId={document.id}
      />
    </>
  );
}
```

---

### Props

- `markdownText` | `string` - by default, the content is regarded as markdown and converted into styled components.
- `handleEditorChange` | `function(string)` - triggers the onChange function of the editor.
- `loadOnce` | `boolean` - by default is set to **false**, and decides whether the markdownText is loaded into the editor only once. Used with `objectId` to determine the uniqueness.
- `objectId` | `string | number` - by default is set to **null**. 

---