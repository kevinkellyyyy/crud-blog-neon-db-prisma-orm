interface IProps {
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-16 w-16",
  lg: "h-24 w-24",
  xl: "h-32 w-32",
};

export default function BaseLoading({ size = "md" }: IProps) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} border-t-4 border-b-2 border-red-500`}
      />
    </div>
  );
}
