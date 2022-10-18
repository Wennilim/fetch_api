import React from "react";
import {
  Text,
  Flex,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Content1() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=Malaysia")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          // auto catches network / connection error
          setLoading(false); //no loading
          setError(err.message); //show error message
        }
      });
  }, []);
  if (error) console.log(error); //the error would not show to the user, it shows only in console.

  return (
    <>
      <Flex
        justifyContent="center"
        fontSize='40px'
        fontWeight="bold"
      >
        <Text textColor="white" marginY="30">
          Universities in Malaysia
        </Text>
      </Flex>
      <Flex
        paddingX="10"
        justifyContent="center"
      >
        <TableContainer>
          <Table>
            <TableCaption>Universities in Malaysia</TableCaption>
            <Thead>
              <Tr color="white">
                <Th border="5px solid" borderColor="white" textAlign="center">
                  University Name
                </Th>
                <Th border="5px solid" borderColor="white" textAlign="center">
                  Domain
                </Th>
                <Th border="5px solid" borderColor="white" textAlign="center">
                  Country
                </Th>
                <Th border="5px solid" borderColor="white" textAlign="center">
                  Country Code
                </Th>
                <Th border="5px solid" borderColor="white" textAlign="center">
                  Website
                </Th>
              </Tr>
            </Thead>
            {loading ? ( // if loading is TRUE
              <Text fontSize="20px" color="white" textAlign="center" padding='10'>
                Loading....
              </Text>
            ) : (
              <Tbody>
                {data.map((data) => {
                  return (
                    <Tr key={data.name} w="100%" color="white">
                      <Td
                        border="1px solid"
                        borderColor="white"
                        textAlign="center"
                      >
                        {data.name}
                      </Td>
                      <Td
                        border="1px solid"
                        borderColor="white"
                        textAlign="center"
                      >
                        {data.domains}
                      </Td>
                      <Td
                        border="1px solid"
                        borderColor="white"
                        textAlign="center"
                      >
                        {data.country}
                      </Td>
                      <Td
                        border="1px solid"
                        borderColor="white"
                        textAlign="center"
                      >
                        {data.alpha_two_code}
                      </Td>
                      <Td
                        border="1px solid"
                        borderColor="white"
                        textAlign="center"
                      >
                        {data.web_pages}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            )}
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}
