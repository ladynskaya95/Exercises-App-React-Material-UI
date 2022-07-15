import React from 'react';
import { Box, Typography } from "@mui/material";

import BodyPart from "./BodyPart"

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart}) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          {/* {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          ) */}
          {/* } */}
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar