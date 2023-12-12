import React from "react";
import { labelProps } from '../../Types'


export default function Label({ text, className }: labelProps) {
  return (
    <div>
      <p className={className}>{text}</p>
    </div>
  );
}
