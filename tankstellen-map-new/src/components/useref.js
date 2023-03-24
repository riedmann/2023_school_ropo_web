import React, { useMemo, useState } from "react";
import { useRef, useEffect } from "react";

export default function UseRef(data) {
  const [value, setValue] = useState(0);
  const countRef = useMemo(() => Math.random(), [value,data]);
  console.log(countRef);

  return (
    <div>
      {countRef}{" "}
      <button
        onClick={() => {
          setValue(value + 1);
          console.log("changing:" + value);
        }}
      >
        Ibut
      </button>{" "}
    </div>
  );
}
