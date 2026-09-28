import styles from './error-message.module.css';

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorMessage({
  message = 'An error occurred. Please try again.',
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className={styles['error-container']} role="alert">
      <div className={styles['error-icon']}>
        <span role="img" aria-label="Warning">
          ⚠️
        </span>
      </div>
      <p className={styles['error-text']}>{message}</p>
      {onRetry && (
        <button
          type="button"
          className={styles['retry-button']}
          onClick={onRetry}
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
