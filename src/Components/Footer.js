import React from "react";

import { Button, Img, Line, List, Text } from "components";
export default function Footer(){
    return(
        <div
        className="bg-cover bg-no-repeat flex flex-col h-[259px] items-center justify-start mt-[159px] pb-[15px] w-full"
        style={{ backgroundImage: "url('images/img_group20.svg')" }}
      >
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[244px] items-center justify-end p-[23px] sm:px-5 w-full"
          style={{ backgroundImage: "url('src/Assest/Images/img_group87.png')" }}
        >
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1658px] mt-[21px] mx-auto md:px-5 w-full">
            <Text
              className="text-base text-white-A700_87 tracking-[-0.50px]"
              size="txtInterRegular16"
            >
              Copyright 2022 © Web3makr
            </Text>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start mb-[76px] md:ml-[0] ml-[350px] w-[33%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[19%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[46px] md:h-auto object-cover w-full"
                        src="images/img_logo3308b1b499.png"
                        alt="logo3308b1b499_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-base text-gray-50 tracking-[-0.40px]"
                      size="txtInterSemiBold16"
                    >
                      Web3Makr
                    </Text>
                    <Text
                      className="text-base text-white-A700_66 tracking-[-0.40px]"
                      size="txtInterSemiBold16WhiteA70066"
                    >
                      White paper
                    </Text>
                    <Text
                      className="text-base text-white-A700_66 tracking-[-0.40px]"
                      size="txtInterSemiBold16WhiteA70066"
                    >
                      Services
                    </Text>
                    <Text
                      className="text-base text-white-A700_66 tracking-[-0.40px]"
                      size="txtInterSemiBold16WhiteA70066"
                    >
                      Tool
                    </Text>
                    <a
                      href="javascript:"
                      className="text-base text-white-A700_66 tracking-[-0.40px]"
                    >
                      <Text size="txtInterSemiBold16WhiteA70066">
                        Contact us
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-1.5 items-center justify-between md:ml-[0] ml-[427px] w-[8%] md:w-full">
                  <Button
                    className="flex h-10 items-center justify-center w-10"
                    shape="round"
                    size="xs"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconssocialsinstagram.svg"
                      alt="iconssocialsins"
                    />
                  </Button>
                  <Button
                    className="flex h-10 items-center justify-center w-10"
                    shape="round"
                    size="xs"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconssocialstwitter.svg"
                      alt="iconssocialstwi"
                    />
                  </Button>
                  <Button
                    className="flex h-10 items-center justify-center w-10"
                    shape="round"
                    size="xs"
                  >
                    <Img
                      className="h-6"
                      src="Assest/Images/img_iconssocialsfacebook.svg"
                      alt="iconssocialsfac"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
     );
}