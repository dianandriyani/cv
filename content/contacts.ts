import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/vue/24/outline';

import type { Contact } from '~/types/contacts';

export const contacts: Contact[] = [
  {
    title: 'Email',
    value: 'diandriidas@gmail.com',
    href: 'mailto:diandriidas@gmail.com',
    icon: EnvelopeIcon,
  },
  {
    title: 'Phone',
    value: '+62 821-2029-2073',
    href: '#',
    icon: PhoneIcon,
  },
  {
    title: 'Location',
    value: 'Jakarta, Indonesia',
    href: '#',
    icon: MapPinIcon,
  },
];
