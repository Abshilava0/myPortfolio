import Link from "next/link";
import classes from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={classes.notFound}>
      <h1>404 - Page Not Found </h1>
      <p>{`The page you're looking for doesn't exist or has been moved.`}</p>
      <Link href="/">
        Return Home
      </Link>
    </div>
  );
}
