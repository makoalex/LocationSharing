import React from "react";
import { ISingleMessage } from "../../Types";

const LeftMessage = ({ content }: ISingleMessage) => {
  return <div className="inline-block bg-disabledButton p-1 rounded-lg">{content}</div>;
};
const RightMessage = ({ content }: ISingleMessage) => {
  return <div className="inline-block bg-accent p-1 rounded-lg">{content}</div>;
};

export default function SingleMessage({ content, myMessage }: ISingleMessage) {
  return (
    <div
    className="w-full flex p-2 font-secondary text-sm tracking-wider"
      style={
        myMessage
          ? { justifyContent: "flex-end" }
          : { justifyContent: "flex-start" }
      }
    >
      {myMessage ? (
        <RightMessage content={content} />
      ) : (
        <LeftMessage content={content} />
      )}
    </div>
  );
}
