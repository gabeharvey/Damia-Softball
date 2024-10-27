import { Box, VStack, Heading, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Media() {
  const mediaArticles = [
    {
      title: "Damia McGarity Wins Tournament",
      url: "https://news4sanantonio.com",
    },
    {
      title: "Damia McGarity Gives Back to Community",
      url: "https://news4sanantonio.com",
    },
  ];

  return (
    <VStack 
        spacing={10} 
        mt={12} 
        align="center"
        p={{ base: 5, md: 10 }}
        minH="100vh" 
        bgImage="url('/softball.png')" 
        bgSize="80%" 
        bgPosition="center"
        bgRepeat="no-repeat"
    > 
      <Heading fontSize="3xl" fontWeight="medium" color="#EF3E42" fontFamily="'Pacifico', cursive" mb="5">
        Media Coverage
      </Heading>
      <Flex direction="column" alignItems="center" width="100%">
        {mediaArticles.map((article, index) => (
          <MotionBox
            fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold"
            key={index}
            w={{ base: '90%', md: '500px' }}
            h="120px"
            m="5"
            bgColor="#FFFFFF"
            borderRadius="12px"
            borderWidth="4px"
            borderColor="#005A9C"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
            p={4}
            display="flex"
            alignItems="center"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <Link
              href={article.url}
              isExternal
              color="#38393d"
              fontWeight="bold"
              fontSize="lg" 
              p={3} 
              _hover={{ color: '#005A9C', textDecoration: 'underline' }}
            >
              {article.title}
            </Link>
          </MotionBox>
        ))}
      </Flex>
    </VStack>
  );
}

export default Media;