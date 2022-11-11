import React, {useRef} from "react";

const ref = useRef(null);
const Number = () => {
    return (
        <>
          <div ref={ref}>
            <span>
              {
                Array.from({ length: 5 })
              }
            </span>
          </div>
        </>
    );
};

export default Number;