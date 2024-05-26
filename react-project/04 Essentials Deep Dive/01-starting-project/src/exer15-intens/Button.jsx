export default function Button({ children, mode = 'filled', Icon, ...props }) {
  // Build the button based on the provided mode
  let buttonClasses = 'button';

  if (mode === 'filled') {
    buttonClasses += ' filled-button';
  } else if (mode === 'outline') {
    buttonClasses += ' outline-button';
  } else if (mode === 'text') {
    buttonClasses += ' text-button';
  }

  // Add "icon-button" class if an Icon component is provided
  if (Icon) {
    buttonClasses += ' icon-button';
  }

  return (
    <button className={buttonClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}