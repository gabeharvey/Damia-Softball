import { Box, Text, VStack, Heading, Grid, Input, Button, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

function SoftballStatTracker() {
  const [stats, setStats] = useState({
    hits: '',
    homeRuns: '',
    RBIs: '',
    stolenBases: '',
    battingAverage: '',
  });

  const [gameInfo, setGameInfo] = useState({
    opponent: '',
    date: '',
  });

  const [games, setGames] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleGameInfoChange = (e) => {
    const { name, value } = e.target;
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAddGame = () => {
    setGames([...games, { ...gameInfo, ...stats }]);
    setStats({
      hits: '',
      homeRuns: '',
      RBIs: '',
      stolenBases: '',
      battingAverage: '',
    });
    setGameInfo({
      opponent: '',
      date: '',
    });
  };

  // Function to calculate averages
  const calculateAverages = (statName) => {
    const total = games.reduce((sum, game) => sum + (parseFloat(game[statName]) || 0), 0);
    return games.length ? (total / games.length).toFixed(2) : 0;
  };

  const averages = {
    hits: calculateAverages('hits'),
    homeRuns: calculateAverages('homeRuns'),
    RBIs: calculateAverages('RBIs'),
    stolenBases: calculateAverages('stolenBases'),
    battingAverage: calculateAverages('battingAverage'),
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      minH="100vh" 
      bgImage="url('/softball.png')" 
      bgSize="80%" 
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={16}
    >
      <Heading fontSize="3xl" fontWeight="medium" color="#EF3E42" fontFamily="'Pacifico', cursive">
        Softball Stat Tracker
      </Heading>
      <Flex gap={4} mb={6} justifyContent="center">
        <MotionBox
          w={{ base: '90%', md: '250px' }}
          bgColor="#4B4B4B"
          borderRadius="12px"
          p={4}
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          borderColor="#005A9C"
          borderWidth="4px"
        >
          <Text 
            color="#FFFFFF" 
            fontWeight="bold" 
            fontFamily="'Roboto+Condensed', system-ui"
            fontSize="md"
            textAlign="center" 
          >
            Softball Stats
          </Text>
          <Text color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">Hits: {averages.hits}</Text>
          <Text color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">Home Runs: {averages.homeRuns}</Text>
          <Text color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">RBIs: {averages.RBIs}</Text>
          <Text color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">Stolen Bases: {averages.stolenBases}</Text>
          <Text color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">Batting Average: {averages.battingAverage}</Text>
        </MotionBox>
      </Flex>
      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#FFFFFF"
        borderRadius="12px"
        borderColor="#38393d"
        borderWidth="5px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <Heading fontSize="lg" color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold" mb={4}>
          Game Stats:
        </Heading>
        {games.length === 0 ? (
          <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">No games added yet.</Text>
        ) : (
          <Grid gap={4}>
            {games.map((game, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">
                  Match {index + 1} - Opponent:
                </Text>
                <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">Opponent: {game.opponent}</Text>
                <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">Date: {game.date}</Text>
                <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">Hits: {game.hits}</Text>
                <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">Home Runs: {game.homeRuns}</Text>
                <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">RBIs: {game.RBIs}</Text>
                <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">Stolen Bases: {game.stolenBases}</Text>
                <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold">Batting Average: {game.battingAverage}</Text>
              </Box>
            ))}
          </Grid>
        )}
      </MotionBox>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#4B4B4B"
        bgImage="linear-gradient(-45deg, #38393d 25%, transparent 25%, transparent 50%, #38393d 50%, #38393d 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#005A9C"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold" fontSize="lg">
              Opponent
            </FormLabel>
            <Input
              fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold"
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.opponent}
              name="opponent"
              onChange={handleGameInfoChange}
              placeholder="Enter opponent name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold" fontSize="lg">
              Date
            </FormLabel>
            <Input
              fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold"
              type="date"
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.date}
              name="date"
              onChange={handleGameInfoChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold" fontSize="lg">
              Hits
            </FormLabel>
            <Input
              fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold"
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.hits}
              name="hits"
              onChange={handleInputChange}
              placeholder="Enter hits"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold" fontSize="lg">
              Home Runs
            </FormLabel>
            <Input
              fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold"
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.homeRuns}
              name="homeRuns"
              onChange={handleInputChange}
              placeholder="Enter home runs"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold" fontSize="lg">
              RBIs
            </FormLabel>
            <Input
              fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold"
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.RBIs}
              name="RBIs"
              onChange={handleInputChange}
              placeholder="Enter RBIs"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold" fontSize="lg">
              Stolen Bases
            </FormLabel>
            <Input
              fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold"
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.stolenBases}
              name="stolenBases"
              onChange={handleInputChange}
              placeholder="Enter stolen bases"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#FFFFFF" fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold" fontSize="lg">
              Batting Average
            </FormLabel>
            <Input
              fontFamily="'Roboto+Condensed', system-ui" fontWeight="bold"
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.battingAverage}
              name="battingAverage"
              onChange={handleInputChange}
              placeholder="Enter batting average"
              type="number"
              step="0.001"
            />
          </FormControl>
          <Button
            onClick={handleAddGame}
            mt={4}
            bgColor="#005A9C"
            color="#FFFFFF"
            minW="100%"
            maxW="45%"
            alignSelf="center"
            fontFamily="'Pacifico', cursive"
            fontWeight="medium"
            fontSize="xl"
            borderRadius="8px"
            borderColor="#005A9C"
            borderWidth="3px"
            _hover={{ borderColor: '#FFFFFF' }}
          >
            Add Game
          </Button>
        </VStack>
      </MotionBox>
    </VStack>
  );
}

export default SoftballStatTracker;
