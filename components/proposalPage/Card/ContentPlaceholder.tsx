import * as React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion,useMotionValue, useDeprecatedInvertedScale } from "framer-motion";

export const ContentPlaceholder = React.memo(() => {
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);
  const inverted = useDeprecatedInvertedScale({scaleX, scaleY});
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
    </motion.div>
  );
});
