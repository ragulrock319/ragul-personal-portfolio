import React, { useState, useEffect } from 'react';

export default function TypingEffect({ roles, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center text-teal-600 dark:text-teal-400 font-mono font-semibold">
      <span>{currentText}</span>
      <span className="animate-pulse ml-1 inline-block w-2.5 h-6 bg-teal-500 rounded-sm"></span>
    </span>
  );
}
