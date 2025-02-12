export const SKILLS = {
    'Languages': [
      'TypeScript',
      'JavaScript',
      'Python',
      'C#',
      'Java',
      'C++',
      'HTML',
      'CSS',
    ],
    'Web Development': [
      'React',
      'Next.js',
      'Astro',
      'TailwindCSS',
      'Node.js',
      'Flask'
    ],
    'Databases': [
      'PostgreSQL',
      'Prisma ORM',
    ],
    'Testing': [
      'Jest',
      'Playwright',
    ],
    'Miscellaneous': [
      'Git',
      'GitHub',
      'Unity',
      'Android Studio',
      'ZenHub',
      'scikit-learn',
    ],
    'Concepts': [
      'Agile',
      'CI/CD',
      'RESTful APIs',
      'MVC Pattern',
      'Test-Driven Development',
    ],
  };

  export const SKILL_CATEGORY_ICONS = {
    'Languages': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'>
        <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z" />
      </svg>
    ),
    'Web Development': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'>
        <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" />
      </svg>
    ),
    'Databases': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'>
        <path d="M12 2C17.5228 2 22 3.34315 22 5V19C22 20.6569 17.5228 22 12 22C6.47715 22 2 20.6569 2 19V5C2 3.34315 6.47715 2 12 2ZM20 10.8237C18.1798 11.7459 15.2237 12.25 12 12.25C8.77631 12.25 5.82025 11.7459 4 10.8237V15.8237C4 16.4867 7.58172 18 12 18C16.4183 18 20 16.4867 20 15.8237V10.8237ZM20 6.82373C18.1798 7.7459 15.2237 8.25 12 8.25C8.77631 8.25 5.82025 7.7459 4 6.82373V8.82373C4 9.48675 7.58172 11 12 11C16.4183 11 20 9.48675 20 8.82373V6.82373ZM12 3.25C7.58172 3.25 4 4.76325 4 5.42627C4 6.08929 7.58172 7.60254 12 7.60254C16.4183 7.60254 20 6.08929 20 5.42627C20 4.76325 16.4183 3.25 12 3.25Z" />
      </svg>
    ),
    'Testing': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'>
        <path d="M4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2ZM19 11H5V20H19V11ZM19 9V4H5V9H19ZM9 6H7V7H9V6ZM7 15H17V17H7V15Z" />
      </svg>
    ),
    'Miscellaneous': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'>
        <path d="M20.0834 14.1667L19.2584 15.825L20.9167 16.65L21.7417 14.9917L20.0834 14.1667ZM20.0834 9.83333L21.7417 9.00833L20.9167 7.35L19.2584 8.175L20.0834 9.83333ZM16.5917 16.4167L12.0001 14.0833L7.40839 16.4167L12.0001 18.75L16.5917 16.4167ZM12.0001 5.25L7.40839 7.58333L12.0001 9.91667L16.5917 7.58333L12.0001 5.25ZM21.7417 14.9917L20.9167 16.65L12.0001 21.25L3.08339 16.65L2.25839 14.9917L1.66672 16.225V17.9167L12.0001 23.3333L22.3334 17.9167V16.225L21.7417 14.9917ZM22.3334 6.775L12.0001 1.35833L1.66672 6.775V8.46667L2.25839 9.7L3.08339 8.04167L12.0001 12.6417L20.9167 8.04167L21.7417 9.7L22.3334 8.46667V6.775Z" />
      </svg>
    ),
    'Concepts': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'>
        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.1046 5 14 5.89543 14 7C14 7.74127 13.5978 8.38553 13 8.7324V15.2676C13.5978 15.6145 14 16.2587 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2587 10.4022 15.6145 11 15.2676V8.7324C10.4022 8.38553 10 7.74127 10 7C10 5.89543 10.8954 5 12 5Z" />
      </svg>
    )
  };

export const SKILL_ICONS = {
  // Languages
  'TypeScript': <img src="/svg/typescript.svg" className="w-4 h-4" alt="TypeScript" />,
  'JavaScript': <img src="/svg/javascript.svg" className="w-4 h-4" alt="JavaScript" />,
  'Python': <img src="/svg/python.svg" className="w-4 h-4" alt="Python" />,
  'C#': <img src="/svg/csharp.svg" className="w-4 h-4" alt="C#" />,
  'Java': <img src="/svg/java.svg" className="w-4 h-4" alt="Java" />,
  'C++': <img src="/svg/cpp.svg" className="w-4 h-4" alt="C++" />,
  'HTML': <img src="/svg/html5.svg" className="w-4 h-4" alt="HTML" />,
  'CSS': <img src="/svg/css3.svg" className="w-4 h-4" alt="CSS" />,

  // Web Development
  'React': <img src="/svg/react.svg" className="w-4 h-4" alt="React" />,
  'Next.js': <img src="/svg/nextjs.svg" className="w-4 h-4" alt="Next.js" />,
  'Astro': <img src="/svg/astro.svg" className="w-4 h-4" alt="Astro" />,
  'TailwindCSS': <img src="/svg/tailwind.svg" className="w-4 h-4" alt="TailwindCSS" />,
  'Node.js': <img src="/svg/nodejs.svg" className="w-4 h-4" alt="Node.js" />,
  'Flask': <img src="/svg/flask.svg" className="w-4 h-4" alt="Flask" />,

  // Databases
  'PostgreSQL': <img src="/svg/postgresql.svg" className="w-4 h-4" alt="PostgreSQL" />,
  'Prisma ORM': <img src="/svg/prisma.svg" className="w-4 h-4" alt="Prisma" />,

  // Testing
  'Jest': <img src="/svg/jest.svg" className="w-4 h-4" alt="Jest" />,
  'Playwright': <img src="/svg/playwright.svg" className="w-4 h-4" alt="Playwright" />,

  // Miscellaneous
  'Git': <img src="/svg/git.svg" className="w-4 h-4" alt="Git" />,
  'GitHub': <img src="/svg/github.svg" className="w-4 h-4" alt="GitHub" />,
  'Unity': <img src="/svg/unity.svg" className="w-4 h-4" alt="Unity" />,
  'Android Studio': <img src="/svg/android.svg" className="w-4 h-4" alt="Android Studio" />,
  'ZenHub': <img src="/svg/zenhub.svg" className="w-4 h-4" alt="ZenHub" />,
  'scikit-learn': <img src="/svg/scikit.svg" className="w-4 h-4" alt="scikit-learn" />,

  // Concepts - using custom icons for abstract concepts
  'Agile': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#38bdf8" className="w-4 h-4"><path d="M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.567 21 2 19.433 2 17.5C2 15.7368 3.30386 14.2781 5 14.0354V9.96456C3.30386 9.72194 2 8.26324 2 6.5C2 4.567 3.567 3 5.5 3C7.26324 3 8.72194 4.30386 8.96456 6H15.0354C15.2781 4.30386 16.7368 3 18.5 3C20.433 3 22 4.567 22 6.5C22 8.26324 20.6961 9.72194 19 9.96456V14.0354C20.6961 14.2781 22 15.7368 22 17.5C22 19.433 20.433 21 18.5 21C16.7368 21 15.2781 19.6961 15.0354 18H8.96456ZM7 16H17V8H7V16Z"></path></svg>,
  'CI/CD': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#22c55e" className="w-4 h-4"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.1046 5 14 5.89543 14 7V17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17V7C10 5.89543 10.8954 5 12 5Z"></path></svg>,
  'RESTful APIs': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f472b6" className="w-4 h-4"><path d="M20 17H22V19H2V17H4V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V17ZM18 17V6H6V17H18ZM14 8V10H10V8H14Z"></path></svg>,
  'MVC Pattern': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a78bfa" className="w-4 h-4"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z"></path></svg>,
  'Test-Driven Development': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbbf24" className="w-4 h-4"><path d="M4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2ZM19 11H5V20H19V11ZM19 9V4H5V9H19ZM9 6H7V7H9V6ZM7 15H17V17H7V15Z"></path></svg>,
};

  