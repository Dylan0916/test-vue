import { cva } from 'class-variance-authority'

// https://www.figma.com/file/UnOBJd1UtkeEccupL0ZrYs/eatigo-APP?node-id=2283%3A40068&mode=dev
export const buttonVariants = cva(
  'relative ring-inset rounded transition-colors cursor-pointer disabled:cursor-default flex items-center flex-nowrap gap-2',
  {
    variants: {
      type: {
        primary: 'text-white bg-red-50 hover:bg-red-60 active:bg-red-80 disabled:[&:not(.btn-loading)]:(bg-red-20 text-gray-10)',
        secondary:
          'text-black-50 bg-white ring-1 ring-gray-50 active:(text-red-50 ring-red-50) disabled:(text-gray-60 ring-gray-60) [&.active]:(text-red-50 ring-red-50)',
        tertiary: 'text-black-50 bg-gray-20 ring-gray-50 disabled:(text-gray-60 ring-gray-60)',
        default: '[&.active]:text-red-50',
        ghost: 'text-black-50 bg-transparent hover:bg-gray-20 active:bg-gray-40 disabled:(text-gray-60 bg-transparent)',
        text: 'text-black-50 bg-transparent hover:bg-gray-20 active:bg-gray-40 disabled:(text-gray-60 bg-transparent) [&.active]:text-red-50',
        'primary-text': 'text-red-50 bg-transparent disabled:(text-gray-60 bg-transparent)',
        icon: 'bg-transparent hover:bg-gray-20 active:bg-gray-40 disabled:(text-gray-60 bg-transparent)',
      },
      size: {
        large: 'text-lg px-4 py-2',
        medium: 'text-lg px-4 py-2',
        small: 'text-base gap-1 px-3 py-1',
        mini: 'text-sm gap-0.5 px-3 py-0.5',
      },
    },
    compoundVariants: [
      {
        type: 'icon',
        size: 'large',
        class: 'p-2.5',
      },
      {
        type: 'icon',
        size: 'medium',
        class: 'p-2',
      },
      {
        type: 'icon',
        size: 'small',
        class: 'p-1.5',
      },
      {
        type: 'icon',
        size: 'mini',
        class: 'p-1',
      },
    ],
    defaultVariants: {
      type: 'default',
      size: 'medium',
    },
  }
)
