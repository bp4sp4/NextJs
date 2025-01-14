export const metadata = {
  title: "About Us",
};

export default function AboutUs({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      &copy; Next JS is great;
    </div>
  );
}
