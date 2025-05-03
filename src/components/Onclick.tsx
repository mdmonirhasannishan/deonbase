'use client';

import { redirect } from 'next/navigation';

interface OnclickProps {
  children: React.ReactNode;
  path: string;
}

const Onclick = ({ children, path }: OnclickProps) => {
  return (
    <div onClick={() => redirect(path)} className="cursor-pointer">
      {children}
    </div>
  );
};

export default Onclick;
