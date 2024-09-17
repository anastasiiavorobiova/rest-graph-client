import { Center, Loader } from '@/shared/ui';

export default function Loading() {
  return (
    <Center h={100} w="100%">
      <Loader color="teal" mx="auto" />
    </Center>
  );
}
