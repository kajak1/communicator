import { useState } from "react";

function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  function toggle(): void {
    setValue((value) => !value);
  }

  return [value, toggle];
}

export { useToggle };
