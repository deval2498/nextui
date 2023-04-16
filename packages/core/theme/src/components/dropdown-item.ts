import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

/**
 * DropdownItem wrapper **Tailwind Variants** component
 *
 * const {base, heading, indicator, trigger, leftIndicator, title, subtitle, content } = dropdownItem({...})
 *
 * @example
 * <div className={base())} data-focus-visible={boolean} data-hover={boolean}>
 *   <div className={heading())}>
 *    <button className={trigger())}>
 *      <div className={leftIndicator()}>
 *         // content
 *      </div>
 *      <div className={titleWrapper()}>
 *        <h3 className={title())}>Title</h3>
 *        <span className={subtitle())}>Subtitle</span>
 *      </div>
 *      <span className={indicator())}>Indicator</span>
 *    </button>
 *  </div>
 *  <div className={content())}>Content</div>
 * </div>
 */
const dropdownItem = tv({
  slots: {
    base: [
      "flex",
      "group",
      "gap-2",
      "items-center",
      "justify-between",
      "relative",
      "px-2",
      "py-1",
      "w-full",
      "h-full",
      "box-border",
      "rounded-lg",
      "outline-none",
      "cursor-pointer",
      // focus ring
      "data-[focus-visible=true]:outline-none",
      "data-[focus-visible=true]:ring-2",
      "data-[focus-visible=true]:ring-primary",
      "data-[focus-visible=true]:ring-offset-2",
      "data-[focus-visible=true]:ring-offset-background",
      "data-[focus-visible=true]:dark:ring-offset-background-content1",
    ],
    wrapper: "w-full flex flex-col items-start justify-center",
    title: "flex-1",
    description: ["text-xs", "text-neutral-500", "truncate", "group-hover:text-current"],
    selectedIcon: ["text-inherit", "w-3", "h-3", "flex-shrink-0"],
    shortcut: [
      "px-1",
      "py-0.5",
      "rounded",
      "font-sans",
      "opacity-60",
      "text-inherit",
      "text-xs",
      "border",
      "border-neutral-200",
      "group-hover:border-current",
    ],
  },
  variants: {
    variant: {
      solid: {
        base: "",
      },
      bordered: {
        base: "border-2 border-transparent bg-transparent",
      },
      light: {
        base: "bg-transparent",
      },
      faded: {
        base: "border border-transparent hover:border-neutral data-[hover=true]:bg-neutral-100",
      },
      flat: {
        base: "",
      },
      shadow: {
        base: "data-[hover=true]:shadow-lg",
      },
    },
    color: {
      neutral: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    showDivider: {
      true: {
        base: [
          "mt-2",
          "before-content-['']",
          "before:absolute",
          "before:-top-1",
          "before:left-0",
          "before:right-0",
          "before:h-px",
          "before:bg-neutral-200",
        ],
      },
    },
    isDisabled: {
      true: {
        base: "opacity-50 pointer-events-none",
      },
    },
    disableAnimation: {
      true: {},
      false: {},
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "neutral",
    disableAnimation: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "neutral",
      class: {
        base: "data-[hover=true]:bg-neutral data-[hover=true]:text-neutral-contrastText",
      },
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        base: "data-[hover=true]:bg-primary data-[hover=true]:text-primary-contrastText",
      },
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        base: "data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-contrastText",
      },
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: "data-[hover=true]:bg-success data-[hover=true]:text-success-contrastText",
      },
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: "data-[hover=true]:bg-warning data-[hover=true]:text-warning-contrastText",
      },
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: "data-[hover=true]:bg-danger data-[hover=true]:text-danger-contrastText",
      },
    },
    // shadow / color
    {
      variant: "shadow",
      color: "neutral",
      class: {
        base:
          "data-[hover=true]:shadow-neutral/50 data-[hover=true]:bg-neutral data-[hover=true]:text-neutral-contrastText",
      },
    },
    {
      variant: "shadow",
      color: "primary",
      class: {
        base:
          "data-[hover=true]:shadow-primary/30 data-[hover=true]:bg-primary data-[hover=true]:text-primary-contrastText",
      },
    },
    {
      variant: "shadow",
      color: "secondary",
      class: {
        base:
          "data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-contrastText",
      },
    },
    {
      variant: "shadow",
      color: "success",
      class: {
        base:
          "data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-contrastText",
      },
    },
    {
      variant: "shadow",
      color: "warning",
      class: {
        base:
          "data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-contrastText",
      },
    },
    {
      variant: "shadow",
      color: "danger",
      class: {
        base:
          "data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-contrastText",
      },
    },
    // bordered / color
    {
      variant: "bordered",
      color: "neutral",
      class: {
        base: "data-[hover=true]:border-neutral",
      },
    },
    {
      variant: "bordered",
      color: "primary",
      class: {
        base: "data-[hover=true]:border-primary data-[hover=true]:text-primary",
      },
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        base: "data-[hover=true]:border-secondary data-[hover=true]:text-secondary",
      },
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        base: "data-[hover=true]:border-success data-[hover=true]:text-success",
      },
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        base: "data-[hover=true]:border-warning data-[hover=true]:text-warning",
      },
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        base: "data-[hover=true]:border-danger data-[hover=true]:text-danger",
      },
    },
    // flat / color
    {
      variant: "flat",
      color: "neutral",
      class: {
        base: "data-[hover=true]:bg-neutral-100 data-[hover=true]:text-neutral-contrastText",
      },
    },
    {
      variant: "flat",
      color: "primary",
      class: {
        base: "data-[hover=true]:bg-primary-50 data-[hover=true]:text-primary",
      },
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        base: "data-[hover=true]:bg-secondary-100 data-[hover=true]:text-secondary",
      },
    },
    {
      variant: "flat",
      color: "success",
      class: {
        base: "data-[hover=true]:bg-success-50 data-[hover=true]:text-success",
      },
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        base: "data-[hover=true]:bg-warning-50 data-[hover=true]:text-warning",
      },
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        base: "data-[hover=true]:bg-danger-50 data-[hover=true]:text-danger",
      },
    },
    // faded / color
    {
      variant: "faded",
      color: "neutral",
      class: {
        base: "data-[hover=true]:text-neutral-contrastText",
      },
    },
    {
      variant: "faded",
      color: "primary",
      class: {
        base: "data-[hover=true]:text-primary",
      },
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        base: "data-[hover=true]:text-secondary",
      },
    },
    {
      variant: "faded",
      color: "success",
      class: {
        base: "data-[hover=true]:text-success",
      },
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        base: "data-[hover=true]:text-warning",
      },
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        base: "data-[hover=true]:text-danger",
      },
    },
    // light / color
    {
      variant: "light",
      color: "neutral",
      class: {
        base: "data-[hover=true]:text-neutral-500",
      },
    },
    {
      variant: "light",
      color: "primary",
      class: {
        base: "data-[hover=true]:text-primary",
      },
    },
    {
      variant: "light",
      color: "secondary",
      class: {
        base: "data-[hover=true]:text-secondary",
      },
    },
    {
      variant: "light",
      color: "success",
      class: {
        base: "data-[hover=true]:text-success",
      },
    },
    {
      variant: "light",
      color: "warning",
      class: {
        base: "data-[hover=true]:text-warning",
      },
    },
    {
      variant: "light",
      color: "danger",
      class: {
        base: "data-[hover=true]:text-danger",
      },
    },
  ],
});

export type DropdownItemVariantProps = VariantProps<typeof dropdownItem>;
export type DropdownItemSlots = keyof ReturnType<typeof dropdownItem>;

export {dropdownItem};