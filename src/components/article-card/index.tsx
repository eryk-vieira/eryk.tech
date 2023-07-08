import { CalendarIcon } from "@chakra-ui/icons";
import { Card, CardBody, CardFooter, Stack, Image, Heading, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";

type Article = {
  id: string;
  title: string;
  description: string;
  banner?: string;
  created_at: string;
}

export function ArticleCard({ id, title, created_at, description, banner }: Article) {
  const defaultBanner = 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'


  return (
    <Link href={`/blog/${id}`} prefetch={false}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        h={'180px'}
      >
        <Stack flex={1}>
          <CardBody overflow={'hidden'}>
            <Stack gap={1}>
              <Heading size='md'>{title}</Heading>

              <Text fontSize={'sm'} fontWeight="normal" opacity={0.8} noOfLines={2} overflow={'hidden'}>
                {description}
              </Text>
            </Stack>

          </CardBody>

          <CardFooter py={2} mt={0}>
            <Flex align={'center'} gap={4}>
              <CalendarIcon color={'gray'} />
              <Text fontSize={'xs'} fontWeight="thin">{new Date(created_at).toLocaleString()}</Text>
            </Flex>
          </CardFooter>
        </Stack>

        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={banner || defaultBanner}
          alt={`${title} article banner`}
        />
      </Card>
    </Link>
  )
}
