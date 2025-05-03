const MaxWidth = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className} overflow-hidden `}>
      {children}
    </div>
  );
};

export default MaxWidth;
