'use client';

import { Avatar, AvatarProps, User, UserProps } from '@heroui/react';
import { forwardRef } from 'react';
import { BadgeCheck } from 'lucide-react';

export interface GoldAvatarProps extends AvatarProps {
  verified?: boolean;
}

export const GoldAvatar = forwardRef<HTMLSpanElement, GoldAvatarProps>(
  ({ verified = false, className = '', ...props }, ref) => {
    return (
      <div className="relative inline-block">
        <Avatar
          ref={ref}
          className={`border-2 border-white shadow-sm ${className}`}
          {...props}
        />
        {verified && (
          <div className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm">
            <BadgeCheck className="h-4 w-4 text-green-500" />
          </div>
        )}
      </div>
    );
  }
);

GoldAvatar.displayName = 'GoldAvatar';

// User card component
export interface GoldUserProps extends UserProps {
  verified?: boolean;
}

export const GoldUser = forwardRef<HTMLDivElement, GoldUserProps>(
  ({ verified = false, classNames, ...props }, ref) => {
    return (
      <User
        ref={ref}
        classNames={{
          base: 'gap-3',
          name: 'text-gray-900 font-medium flex items-center gap-1.5',
          description: 'text-gray-500 text-sm',
          ...classNames,
        }}
        avatarProps={{
          className: 'border-2 border-white shadow-sm',
          ...props.avatarProps,
        }}
        {...props}
        name={
          <span className="flex items-center gap-1.5">
            {props.name}
            {verified && <BadgeCheck className="h-4 w-4 text-green-500" />}
          </span>
        }
      />
    );
  }
);

GoldUser.displayName = 'GoldUser';
