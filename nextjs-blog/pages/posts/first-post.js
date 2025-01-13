import Link from 'next/link';
import PROFILE from '/public/images/profile.jpg'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <img 
        src = '/images/profile.jpg'
        height={144}
        width={144}
        alt = "Your Name" />
      </h2>
    </>
  );
}