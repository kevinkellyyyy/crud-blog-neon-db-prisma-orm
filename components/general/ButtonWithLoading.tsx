"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface IProps {
  text: string;
}

export function ButtonWithLoading({ text }: IProps) {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full cursor-pointer" type="submit" disabled={pending}>
      {pending ? (
        <div className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.343A8.001 8.001 0 0112 20v4c-6.627 0-12-5.373-12-12h4a8.001 8.001 0 006.343 6.93zM20 12a8.001 8.001 0 01-6.343 6.93l1.414 1.414A10.002 10.002 0 0022 12h-4zm-.93-6.343A8.001 8.001 0 0112 4V0c6.627 0 12 5.373 12 12h-4a8.001 8.001 0 01-6.343-6.93l1.414-1.414z"
            ></path>
          </svg>
          {text}
        </div>
      ) : (
        text
      )}
    </Button>
  );
}
