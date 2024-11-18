import { SVGProps } from 'react';

type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="presentation"
    viewBox="0 0 24 24"
    height={size || height}
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="presentation"
    viewBox="0 0 24 24"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const CommentIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="presentation"
    viewBox="0 0 498 512"
    height={size || height}
    width={size || width}
    {...props}
  >
    <g>
      <path fill="currentColor" d="M464 480a15.986 15.986 0 0 1-6.802-1.506 15.987 15.987 0 0 1-5.518-4.254l-70.4-84.48a15.987 15.987 0 0 0-5.518-4.254A15.986 15.986 0 0 0 368.96 384H80a47.999 47.999 0 0 1-48-48V80a48 48 0 0 1 48-48h352a48 48 0 0 1 48 48v384a16 16 0 0 1-10.56 15.04 15.996 15.996 0 0 1-5.44.96ZM80 64a16 16 0 0 0-16 16v256a16.002 16.002 0 0 0 16 16h288.96a47.999 47.999 0 0 1 36.96 17.28L448 419.84V80a16.002 16.002 0 0 0-16-16H80Zm336 64c0-4.243-1.686-8.313-4.686-11.314A16.004 16.004 0 0 0 400 112H112a16.003 16.003 0 0 0-11.314 27.314c3.001 3 7.071 4.686 11.314 4.686h288c4.243 0 8.313-1.686 11.314-4.686 3-3.001 4.686-7.071 4.686-11.314Zm0 80c0-4.243-1.686-8.313-4.686-11.314A16.004 16.004 0 0 0 400 192H112a16.003 16.003 0 0 0-11.314 27.314c3.001 3 7.071 4.686 11.314 4.686h288c4.243 0 8.313-1.686 11.314-4.686 3-3.001 4.686-7.071 4.686-11.314Zm0 80c0-4.243-1.686-8.313-4.686-11.314A16.004 16.004 0 0 0 400 272H112a16.003 16.003 0 0 0-11.314 27.314c3.001 3 7.071 4.686 11.314 4.686h288c4.243 0 8.313-1.686 11.314-4.686 3-3.001 4.686-7.071 4.686-11.314Z"/>
    </g>
  </svg>
);


export const BasketballIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    id="basketball"
    enableBackground="new 0 0 115 115"
    viewBox="0 0 115 115"
    xmlns="http://www.w3.org/2000/svg"
    height={size || height}
    width={size || width}
    {...props}
  >
    <g id="_x31_75">
      <g>
        <path
            d="m110.5793457 57.5007172c0 13.1902237-4.8121872 25.2568283-12.7771683 34.54039-.5329132.623909-1.0831757 1.2362671-1.6478577 1.8341827-9.3499985 9.9334717-22.4867935 16.2635574-37.1053734 16.6809464-.5155869.0158844-1.0311813.0231094-1.5496635.0231094-.6210213 0-1.2391586-.0101089-1.8558426-.0332184-17.2557602-.5906906-32.418808-9.4193192-41.6821518-22.675972-1.4947824-2.1374817-2.8350306-4.3904877-4.0048685-6.7431488-3.5441579-7.1157608-5.5357675-15.1384964-5.5357675-23.6262893 0-5.2656937.7668896-10.3522949 2.1937976-15.1543846.5473714-1.8385124 1.1900592-3.633709 1.9251714-5.3826752 2.894249-6.8933468 7.2024126-13.045805 12.5605412-18.0948544.6152363-.5805855 1.2434864-1.1452789 1.8847275-1.694088 5.1747074-4.435257 11.2145004-7.8898706 17.8291168-10.0778942.8694267-.2874022 1.7475243-.5531368 2.6357346-.7957764 4.474247-1.2261567 9.1853485-1.8803916 14.0495415-1.8803916 5.7812881 0 11.347374.9243069 16.5581894 2.6342883 2.3858719.7827744 4.6980972 1.7301936 6.920784 2.8278203 13.20755 6.5250568 23.3099976 18.3822536 27.4925079 32.7596359.6845703 2.3483315 1.2088242 4.7630959 1.5626602 7.2327461.3610533 2.4898659.5459212 5.0360581.5459212 7.6255738z"
            fill="#f80"
          />
          <path
            d="m110.5793457 57.5007172c0 13.1902237-4.8121872 25.2568283-12.7771683 34.54039-.5329132.623909-1.0831757 1.2362671-1.6478577 1.8341827-9.3499985 9.9334717-22.4867935 16.2635574-37.1053734 16.6809464-.5155869.0158844-1.0311813.0231094-1.5496635.0231094-.6210213 0-1.2391586-.0101089-1.8558426-.0332184-6.6767197-.2296295-13.0414658-1.6912003-18.8704147-4.1651764-1.9295006-.8188858-3.7997894-1.74897-5.6036415-2.7816086.2628517.0115585.5257034.0231094.7885571.0317688.6166821.0231171 1.2348194.033226 1.8558407.033226.518486 0 1.0340805-.0072174 1.5496635-.0231171 14.6185799-.4173737 27.7553711-6.7474747 37.1053658-16.6809387.5646896-.597908 1.1149445-1.2102737 1.6478729-1.8341751 7.9649734-9.2835693 12.7771606-21.350174 12.7771606-34.5403976 0-2.5895195-.1848602-5.1357117-.5459213-7.625576-.3538361-2.4696503-.8780899-4.8844109-1.5626602-7.2327423-3.8763275-13.3245411-12.8378296-24.4856071-24.644474-31.241745 2.1129227.1025352 4.1926231.3307271 6.2333336.6744566 2.6314011.4419365 5.1978149 1.0788412 7.6833496 1.8948393 2.3858719.7827744 4.6980972 1.7301936 6.920784 2.8278203 13.20755 6.5250568 23.3099976 18.3822536 27.4925079 32.7596359.6845703 2.3483315 1.2088242 4.7630959 1.5626602 7.2327461.3610534 2.4898658.5459213 5.036058.5459213 7.6255737z"
            fill="#e14f01"
          />
          <path
            d="m98.7365952 54.0432129c0 13.1902237-4.8121872 25.2568283-12.7771606 34.54039-.5329208.623909-1.0831833 1.2362747-1.6478729 1.8341827-9.3499985 9.9334717-22.4867859 16.2635651-37.1053658 16.6809464-.515583.015892-1.0311775.0231094-1.5496635.0231094-.6210213 0-1.2391586-.0101089-1.8558426-.033226-2.3858833-.0823135-4.7313232-.32061-7.0276642-.7076645-1.9295006-.8188858-3.7997894-1.74897-5.6036415-2.7816086.2628517.0115585.5257034.0231094.7885571.0317688.6166821.0231171 1.2348194.033226 1.8558407.033226.518486 0 1.0340805-.0072174 1.5496635-.0231171 14.6185799-.4173737 27.7553711-6.7474747 37.1053658-16.6809387.5646896-.597908 1.1149445-1.2102737 1.6478729-1.8341751 7.9649734-9.2835693 12.7771606-21.350174 12.7771606-34.5403976 0-2.5895195-.1848602-5.1357117-.5459213-7.625576-.3538361-2.4696503-.8780899-4.8844109-1.5626602-7.2327423-3.8763275-13.3245411-12.8378296-24.4856071-24.644474-31.241745 2.1129227.1025352 4.1926231.3307271 6.2333336.6744566.9358673.3957195 1.8544006.8174348 2.7613831 1.2651534 13.2075577 6.5250654 23.3100052 18.3822536 27.4925079 32.7596397.6845703 2.3483315 1.2088242 4.763092 1.5626602 7.2327461.3610609 2.4898639.5459212 5.0360561.5459212 7.6255718z"
            fill="#f06b02"
          />
          <path
            d="m48.1593971 19.2471924c-3.5224953 2.3757744-6.9597816 5.1140423-10.2338638 8.1353951.3220596.2484035.6426773.4968185.9589653.7423306 1.6204414 1.252161 3.1498833 2.43643 4.6461182 3.5528316l.0447731.0346603c10.5241585 8.6639786 20.3030891 17.9172134 29.0667305 27.5026169 9.7139359 10.6223679 18.1656265 21.6491318 25.1600571 32.8260803-.5329132.623909-1.0831757 1.2362671-1.6478577 1.8341827-16.5480881-26.6375198-38.3979607-47.4172172-54.0621643-60.3157043-1.50634-1.1236115-3.0372391-2.307888-4.6562233-3.5614853-.4130478-.3206253-.8304367-.6426888-1.2507133-.9676418-3.2163124 3.123888-6.250658 6.5192928-9.02215 10.1111088 6.0470219 6.2809906 9.9146976 16.283783 11.7994251 30.4921913 1.9713783 16.0555954 9.2662239 30.8792496 20.0864525 40.9224777-.5155869.0158844-1.0311813.0231094-1.5496635.0231094-.6210213 0-1.2391586-.0101089-1.8558426-.0332184-4.4468155-4.5190201-8.3708076-9.9840164-11.4686966-15.9992676-3.9543266-7.6761246-6.4990692-15.9559326-7.562027-24.6126938-1.7865219-13.4704094-5.3595657-22.9503899-10.8924389-28.8717613-12.2976896 16.8167038-16.4917527 33.8717079-11.7589914 46.8077507-1.4947824-2.1374817-2.8350306-4.3904877-4.0048685-6.7431488-.0072193-.0462189-.0115566-.0924301-.0173302-.138649-.4895983-4.3428268-.2050791-9.0077133.8448753-13.8675766 1.9526129-9.0293655 6.509181-18.5960045 13.1772337-27.6643677.0101109-.0158882.0231037-.0317726.0346603-.0476646-3.1773243-2.2761192-6.4759674-3.1729851-9.5550823-2.5909615-2.9173536.5502548-5.6036415 2.4523201-7.8263249 5.5285454.5473714-1.8385124 1.1900592-3.633709 1.9251714-5.3826752 1.6897602-1.2723732 3.5253887-2.1071396 5.4621086-2.4739799 3.7477989-.7076721 7.6920109.3408432 11.4210339 3.030014 2.7310505-3.523941 5.7105141-6.8615742 8.8632851-9.9464645-4.2503891-3.2423153-8.7881908-6.5106258-13.1858864-8.7044239.6152363-.5805855 1.2434864-1.1452789 1.8847275-1.694088 4.4150352 2.316555 8.8719521 5.5603161 13.0371284 8.743412 3.2480965-3.0242329 6.6608315-5.7755051 10.1587715-8.1859379-1.4009132-1.1886139-2.577961-2.4638691-3.467617-3.7810135-1.5597725-2.3093433-2.203907-4.6735516-1.8991661-6.8543553.8694267-.2874022 1.7475243-.5531368 2.6357346-.7957764-1.1727219 3.0574574.7322197 6.8572383 4.7789764 10.0663376 1.1236229-.725009 2.2559013-1.4167957 3.3910675-2.0667028 7.8349915-4.4872484 15.4490166-6.92945 22.4376869-7.2457385 2.3858719.7827744 4.6980972 1.7301936 6.920784 2.8278203-8.2769241-1.587225-17.9923172.6397963-28.1814117 6.4730663-.8304367.4751587-1.6565361.9734135-2.4812012 1.4904537.8463211.5372601 1.757637 1.0485172 2.7281685 1.5265598 3.3434067 1.6464348 7.024765 2.872591 10.9444275 3.6466999 22.8319511 4.5074711 37.3147697 10.8491154 44.4825249 19.622858.6845703 2.3483315 1.2088242 4.7630959 1.5626602 7.2327461-2.1028061-5.3494644-6.5019608-9.8641434-13.3837433-13.7491455-7.7786636-4.3904858-18.6118927-7.9187584-33.1207085-10.7826748-4.1218491-.8145523-8.0025177-2.1071472-11.5322342-3.8460064-1.3734703-.6759007-2.658844-1.4341271-3.8373413-2.2501252z"
            fill="#333"
          />
          <g>
            <g>
              <path
                d="m9.4550982 52.4790115c.4095907-2.9872665 1.0349817-5.2430649.5393839-5.2561226-.4939117-.0130157-1.8455305 2.5093079-2.2551217 5.4965706-.4098678 2.9892769.277679 5.3102112.7715917 5.3232269.4955977.0130578.5342778-2.574398.9441461-5.5636749z"
                fill="#fff"
              />
            </g>
            <g>
              <path
                d="m8.1959066 57.7638168c-.3086395-.9194984-.5110369-2.5938873-.2421432-4.5547523.4027629-2.9201508 1.7004428-5.401886 2.2210135-5.4909172.0066891-.3146896-.0459194-.4918747-.1813431-.4972649-.492732-.0081215-1.84272 2.510704-2.2539077 5.4963455-.327524 2.389946.0422451 4.3509064.4563805 5.0465889z"
                fill="#dce0f4"
              />
            </g>
            <g>
              <path
                d="m11.4839964 43.1873322c.2510605-.8421974.2852898-1.4683876.072669-1.5359535-.2118969-.0673409-.8560448.5145912-1.1071062 1.3567848-.2512302.842762-.0141268 1.6262856.1977701 1.6936226.2126217.0675697.5854369-.671692.8366671-1.5144539z"
                fill="#fff"
              />
            </g>
            <g>
              <path
                d="m10.4950819 44.5087395c-.0802898-.3067093-.0884781-.7593384.0509462-1.2234192.2490635-.8440628.8931046-1.4245415 1.100853-1.3565598.0160379.001091.0383434.0133133.0509539.035717-.0045824-.1725464-.0578661-.2946053-.1443233-.3111877-.2078295-.0677948-.8517513.5125618-1.100853 1.3565559-.1829167.6334267-.099022 1.2202149.0424232 1.4988938z"
                fill="#dce0f4"
              />
            </g>
          </g>
        </g>
        <g>
          <path
            d="m93.529007 47.2208328c-3.4899979 0-6.3137665 2.8237686-6.3137665 6.3137627 0-1.7419548-.7089844-3.3249588-1.8458176-4.4679108-1.1429825-1.1368675-2.7259827-1.8458519-4.4679031-1.8458519 1.7419205 0 3.3249207-.7089806 4.4679031-1.8458519 1.1368332-1.142952 1.8458176-2.7259521 1.8458176-4.4678535 0 1.7419014.7090225 3.3249016 1.8458557 4.4678535 1.142952 1.1368714 2.7259903 1.8458519 4.4679108 1.8458519z"
            fill="#fff"
          />
        </g>
      </g>
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);