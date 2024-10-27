import { Box, VStack, Heading, Flex, Link, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Academics() {
  const academicAchievements = [
    "Valedictorian of San Antonio High School, Class of 2024",
    "National Honor Society Member",
    "State Champion in Science Fair (2023)",
    "AP Scholar with Distinction",
    "Completed dual credit courses in Mathematics and English",
    "Volunteer tutor for underclassmen in math and science subjects",
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
      <Heading fontSize="4xl" fontWeight="medium" color="#EF3E42" fontFamily="'Pacifico', cursive" mb="5">
        Academics
      </Heading>
      <Flex direction="column" alignItems="center" width="100%">
        <MotionBox
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
            href="/path-to-transcripts" 
            isExternal
            color="#38393d"
            fontWeight="bold"
            fontSize="lg"
            p={3}
            _hover={{ color: '#005A9C', textDecoration: 'underline' }}
          >
            View Transcripts
          </Link>
        </MotionBox>

        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="auto"
          m="5"
          bgColor="#FFFFFF"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#005A9C"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Text fontWeight="bold" fontSize="lg" color="#005A9C" mb="2">
            Academic Achievements
          </Text>
          <VStack spacing={2} align="start">
            {academicAchievements.map((achievement, index) => (
              <Text key={index} color="#38393d">
                - {achievement}
              </Text>
            ))}
          </VStack>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default Academics;