import React, { useState } from 'react'
import { Button, createIcon,Stack, HStack, Input, FormControl,Container, Box, Image,Text, VStack, Heading, border, textDecoration, Spacer, color} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'

const img = [
    require("../Features/Images/google-key.png"),
    require("../Features/Images/timecards/img1.jpg"),
    require("../Features/Images/timecards/img2.jpg"),
    require("../Features/Images/timecards/img3.jpg"),
    require("../Features/Images/timecards/img4.jpg"),

    
   
    
]

const btnimg = [
    require("../Features/Images/timecards/imgA.jpg"),
    require("../Features/Images/timecards/imgB.jpg"),
    require("../Features/Images/timecards/imgC.jpg"),
]


export const img1=[
    require("../Features/Images/timetracking/img6-1.jpg"), //[5]
    require("../Features/Images/timetracking/img7-1.jpg"),  //[6]
    require("../Features/Images/timetracking/img8-1.jpg"), //[7]
    require("../Features/Images/timetracking/img9-1.jpg"),
]

const styles ={
    cont:{
        backgroundColor:"#f6f8f9",
        width:"100%",
        display:"flex",
        flexDirection:"column"
        },
    logo1Div:{
        width: "240px",
    height: "146px",
    margin: "0 auto",
    marginTop: "52px",
    marginBottom: "18px",

    },
     logo1:{
        Maxwidth:"100%",
    },
    headerH4:{
        color: "#282828",
        fontSize: "36px",
        letterSpacing: ".01em;",
        lineHeight: "66px",
        margin: "0 0 25px",
        fontWeight: 700,
    },
    form:{
         display:"flex",
         margin:"auto",
         width:"70%",
         textAlign:"center",
        //  border:"1px solid red",
         justifyContent:"center",
        //  marginLeft:"10%",
        //  marginRight:"10%",
        //  flexDirection:{base:"column", lg:"row"}
        
    },
    formInput:{
        marginRight:"25px",
        marginBottom:"20px",
        height:"40px",
        // backgroundColor:"#fac8c3",
        textAlign:"center",
        fontSize:"16px",
        fontWeight:"400",
        border:"1px solid black",

        
    },
    formButton:{
        backgroundColor:"#ed565a",
        color:"white",

    },
    googleText:{
        textDecoration:"0.5px dotted underline",
        fontWeight:"bold",
        marginLeft:"10px"
        
    },
    
    infoMain:{
        display:"flex",
        width:"90%",
        margin:"auto",
        alignItems:"center",
        marginLeft:"10%",
        marginRight:"10%",
        // border:"1px solid blue",
        marginTop:"20px",
    },
    infoDesc:{
     display:"flex",
     flexDirection:"column",
      marginLeft:"20px",
      marginTop:"20px",
    //   border:"1px solid red",
    //   justifyContent:"flex-start",
      alignItems:"flex-start",
      marginBottom:"20px",

    },
    infoDescHeading:{
               
        fontSize:"30px",
        textAlign:"left",
        // marginLeft:"-42%",
        marginBottom:"44px",
        lineHeight:"40px",
        // border:"1px solid red",
        // justifyContent:"flex-start",
        // jutsifyItems:"flex-start",
        // alignItems:"flex-start",
        

        
    },
    infoDescText:{
        color:"#7f8488",
        fontSize:"20px",
        textAlign:"left",
        // border:"1px solid red",
        letterSpacing: "normal",
        fontSize: "18px",
        lineHeight: "28px",
        fontWeight: 500,
            },
     infoDescHighlighted:{
        fontWeight:"bold",
        textDecoration:"underline"
     },

     dispBtn:{
        // backgroundColor:"white",
        width:"100%",
        height:"60px",
        marginBottom:"10px",
        justifyContent:"flex-start"
     },
     
     lastHeading:{
        // margin: 0!important;
    marginTop: "30px",
    marginBottom:"30px",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "22px",
    letterSpacing: "2.52px",
    textTransform: "uppercase",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
     },

     cardsHeading:{
        fontSize: "24px",
       lineHeight: "32px",
       fontWeight:500,

     },
     cardDesc:{
        fontSize: "14px",
        lineHeight: "24px",
        textAlign:"center",
     }
    
    }


    


const logo1 = "https://trackingtime.co/wp-content/uploads/2020/07/Home-office-and-remote-working-solutions-for-team-collaboration.svg";

const Timecards = () => {
    
    const [id,setId] = useState(0);
    const [status1, setStatus1] = useState(false)
    const [status2, setStatus2] = useState(false)
    const [status3, setStatus3] = useState(false)

    const handleClick1 =()=>{
        setStatus1(true)
        setStatus2(false)
        setStatus3(false)
        setId(0)
    }
    const handleClick2 =()=>{
       setStatus1(false)
        setStatus2(true)
        setStatus3(false)
        setId(1)
    }
    const handleClick3 =()=>{
       setStatus1(false)
        setStatus2(false)
        setStatus3(true)
        setId(2)
    }

    
  return (
    <Box>

            <Box style={styles.cont} className={CSS.cont} >
                
            {/* <Image src={logo1} style={styles.logo1Div} />
            <h4 style={styles.headerH4}>Time Tracker for every business</h4> */}
            <Text style={styles.lastHeading}>TIME CARDS TO TRACK YOUR EMPLOYEES’ HOURS</Text>

            {/* <FormControl style={styles.form} flexDirection={{base:"column", lg:"row"}}  >
                <Input style={styles.formInput} type="email" placeholder="Your Work Email"  width={{base:"100%", lg:"30%"}} />
                <Button style={styles.formButton} width={{base:"100%", lg:"30%"}}>START FOR FREE !</Button>
                </FormControl> */}

                {/* <HStack margin="auto" mt={{base:"10px"}} >
                    <Image src={img[0]} width="20px" height="20px"/>
                    <Text style={styles.googleText} _hover={{color:"#00ad95"}}>Sigin in with Google</Text>
                </HStack> */}
                <VStack >
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >
                    {/* <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} ></Text> */}
                    {/* <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} ></Text> */}
                        <Image src={img[1]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Online time cards for easy clock in and out</Heading>
                            <Text style={styles.infoDescText}> Employees can clock in and out from the TrackingTime time cards, 
                            using their smartphones, or 
                            directly in 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > Slack </Text> and 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > Microsoft Teams </Text>
                            .</Text>
                        </VStack>
                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                   
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Get a monthly overview of your team’s attendance </Heading>
                            <Text style={styles.infoDescText}>Whether you have 1 or 100 employees, 
                            TrackingTime automatically creates monthly 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > attendance data  </Text>
                            for your entire team</Text>
                        </VStack>
                        <Image src={img[2]} w={{base:"100%", lg:"70%"}} /> 

                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >
                        
                        <Image src={img[3]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Track breaks, overtime hours and time off</Heading>
                            <Text style={styles.infoDescText}>
                            Set work schedules for your employees and 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} >  keep track   </Text>
                            of lunch breaks, overtime hours and paid time off, based on your own policies.
                            </Text>
                        </VStack>

                    </Stack>
                    
                </VStack>
                <Text>
                    
                    <Stack direction={{base:"column",lg:"row"}} w="85%"  margin="auto" mt="20px" >
                        <VStack w={{base:"100%",lg:"50%"}} >
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick1} bg={status1? "black":"white"} color={status1? "white":"black"}  >For Salary and Hourly Opeartions</Button>
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick2} bg={status2? "black":"white"} color={status2? "white":"black"}  >Approve Attendance in Batches</Button>
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick3} bg={status3? "black":"white"} color={status3? "white":"black"} > Stay Compliant</Button>
                        </VStack>
                        <Stack w={{base:"100%",lg:"50%"}} >
                           <Image src={btnimg[id]} />
                        </Stack>
                    </Stack>

                </Text>
                <VStack >
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                
                        <Image src={img[4]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Export data to payroll</Heading>
                            <Text style={styles.infoDescText}> Download approved data to PDF, CSV or Excel 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} >  reports    </Text>
                            and submit them to payroll. </Text>
                        </VStack>

                    </Stack>
                   
                              
                </VStack>
                <Text style={styles.lastHeading}>IT’S TIME FOR BETTER REPORTS.</Text>
                <Button style={styles.formButton} width={{base:"80%", lg:"20%"}} margin="auto" mb="50px"> TRY TRACKING TIME FREE!</Button>
                
            </Box>

                <Box>
                    <Stack direction={{base:"column",lg:"row"}} w="85%"  margin="auto" mt="20px" gap="20px">
                        <VStack  >
                            <Image src={img1[0]} />
                            <Text style={styles.cardsHeading}>TimeCards Approval</Text>
                            <Text style={styles.cardDesc}>Track clock in and out times with no effort.</Text>
                        </VStack>
                        <VStack   >
                            <Image src={img1[1]} />
                            <Text style={styles.cardsHeading}>Budgeting</Text>
                            <Text style={styles.cardDesc}>Keep your projects on time and budget.</Text>
                        </VStack>
                        <VStack   >
                            <Image src={img1[2]} />
                            <Text style={styles.cardsHeading}>Work Schedules</Text>
                            <Text style={styles.cardDesc}>Specify when your employees are expected to be at their job.</Text>
                        </VStack>
                        <VStack   >
                            <Image src={img1[3]} />
                            <Text style={styles.cardsHeading}>Timesheet Audits</Text>
                            <Text style={styles.cardDesc}>Avoid data inconsistencies with just one click.</Text>
                        </VStack>


                    </Stack>

                </Box>
    </Box>
  )
}

export default Timecards