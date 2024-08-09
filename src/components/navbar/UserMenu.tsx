'use client';

import { signOutUser } from "@/app/actions/authActions";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react"
import { Session } from "next-auth"
import Link from "next/link"

type Props = {
    user: Session['user']
}

export default function UserMenu({user}: Props) {
  return (
    <Dropdown placement="bottom-end">
        <DropdownTrigger>
            <User
                name={user?.name || 'user avatar'}
                avatarProps={{
                    src: user?.image || '/images/user.png'
                }}
                className="cursor-pointer text-white font-semibold"
            />
        </DropdownTrigger>
        <DropdownMenu variant="flat" aria-label="User actions menu">
            <DropdownItem as={Link} href="/members/edit">
                Edit profile
            </DropdownItem>
            <DropdownItem color="danger" onClick={async () => signOutUser()}>
                Log out
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  )
}