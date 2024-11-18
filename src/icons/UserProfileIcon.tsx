export function UserProfileIcon(props: { fill: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_44_6)">
        <path
          d="M11 7C11 8.66 9.66 10 8 10C6.34 10 5 8.66 5 7C5 5.34 6.34 4 8 4C9.66 4 11 5.34 11 7Z"
          fill={props.fill}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 8C16 12.42 12.42 16 8 16C3.58 16 0 12.42 0 8C0 3.58 3.58 0 8 0C12.42 0 16 3.58 16 8ZM4 13.75C4.16 13.484 5.71 11 7.99 11C10.26 11 11.82 13.49 11.98 13.75C12.9099 13.107 13.6696 12.2477 14.194 11.2461C14.7183 10.2445 14.9915 9.13054 14.99 8C14.99 4.13 11.86 1 7.99 1C4.12 1 0.99 4.13 0.99 8C0.99 10.38 2.18 12.49 4 13.75Z"
          fill={props.fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_44_6">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
