export default function SwitchNetworkButton() {
  const onClick = async () => {
    // @ts-ignore
    if (window.ethereum) {
      const params = {
        // 68840142 in hex
        chainId: "0x41A6ACE",
        chainName: "Frame Testnet", // A string
        nativeCurrency: {
          name: "Ether", // A string
          symbol: "ETH", // 2-6 characters long
          decimals: 18,
        },
        rpcUrls: ["https://rpc.testnet.frame.xyz/http"],
        blockExplorerUrls: ["https://explorer.testnet.frame.xyz/"],
      };

      // @ts-ignore
      const result = await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [params],
      });
    }
  };

  return (
    <svg
      onClick={onClick}
      style={{ marginTop: 12, cursor: "pointer" }}
      width="156"
      height="48"
      viewBox="0 0 156 48"
      fill="none"
    >
      <path
        d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H136.8C143.521 0 146.881 0 149.448 1.30792C151.706 2.4584 153.542 4.29417 154.692 6.55211C156 9.11905 156 12.4794 156 19.2V28.8C156 35.5206 156 38.8809 154.692 41.4479C153.542 43.7058 151.706 45.5416 149.448 46.6921C146.881 48 143.521 48 136.8 48H19.2C12.4794 48 9.11905 48 6.55211 46.6921C4.29417 45.5416 2.4584 43.7058 1.30792 41.4479C0 38.8809 0 35.5206 0 28.8V19.2Z"
        fill="black"
      />
      <path
        d="M25.0331 25.91L26.4731 25.16C26.7881 26.915 27.7481 27.785 29.3231 27.785C30.6881 27.785 31.5731 27.065 31.5731 26.105C31.5731 25.07 30.7181 24.53 28.8731 24.185C26.7731 23.78 25.5131 22.79 25.5131 21.095C25.5131 19.43 26.9981 18.29 29.0981 18.29C31.0331 18.29 32.4131 19.22 33.0131 20.915L31.7231 21.665C31.2881 20.405 30.3581 19.715 29.0831 19.715C27.9281 19.715 27.0581 20.21 27.0581 21.065C27.0581 22.01 27.9281 22.52 29.7881 22.895C32.0681 23.375 33.1931 24.335 33.1931 26.015C33.1931 27.77 31.6481 29.21 29.3231 29.21C26.9231 29.21 25.4531 27.89 25.0331 25.91ZM36.0103 29L33.9103 21.56H35.4253L36.8203 27.065L38.3203 21.56H39.8503L41.3353 27.065L42.7303 21.56H44.2453L42.1453 29H40.5853L39.0853 23.405L37.5703 29H36.0103ZM45.3429 29V21.56H46.9029V29H45.3429ZM45.2529 20.375V18.65H47.0079V20.375H45.2529ZM49.5021 26.96V22.805H48.3021V21.56H49.5021V19.55H51.0471V21.56H52.7421V22.805H51.0471V26.735C51.0471 27.47 51.3771 27.845 52.0371 27.845C52.2321 27.845 52.4421 27.815 52.6371 27.755L52.7871 29.03C52.4421 29.15 52.0821 29.21 51.6771 29.21C50.3721 29.21 49.5021 28.535 49.5021 26.96ZM53.5794 25.28C53.5344 23.015 55.3944 21.32 57.4494 21.35C59.0544 21.35 60.1794 22.01 60.7194 23.225L59.4444 24.005C59.0094 23.195 58.3494 22.79 57.4494 22.79C56.1594 22.79 55.1694 23.78 55.1694 25.28C55.1694 26.78 56.1144 27.77 57.4494 27.77C58.4544 27.77 59.0394 27.35 59.5194 26.51L60.7644 27.275C59.9994 28.565 58.9044 29.21 57.4494 29.21C55.2444 29.21 53.5794 27.605 53.5794 25.28ZM62.1446 29V18.5H63.7046V22.82C64.2446 21.905 65.2046 21.35 66.3296 21.35C67.9496 21.35 68.9546 22.355 68.9546 23.96V29H67.4096V24.485C67.4096 23.405 66.8096 22.775 65.7446 22.775C64.6346 22.775 63.7046 23.765 63.7046 25.1V29H62.1446ZM75.2885 29V18.5H76.9385L81.6635 25.76C81.9035 26.165 82.0535 26.45 82.1135 26.585V18.5H83.6885V29H82.0235L77.2985 21.71C77.0585 21.305 76.9085 21.02 76.8485 20.885V29H75.2885ZM85.2933 25.28C85.2933 22.985 86.9883 21.35 89.1333 21.35C91.2783 21.35 92.7333 22.895 92.7333 25.07V25.61H86.7933C86.8983 26.945 87.8133 27.875 89.0883 27.875C90.1833 27.875 90.8733 27.35 91.3683 26.375L92.5083 27.035C91.7883 28.49 90.6933 29.21 89.0583 29.21C87.0033 29.21 85.2933 27.59 85.2933 25.28ZM86.8233 24.395H91.2483C91.1283 23.255 90.2433 22.565 89.0883 22.565C87.9633 22.565 87.0783 23.33 86.8233 24.395ZM94.7511 26.96V22.805H93.5511V21.56H94.7511V19.55H96.2961V21.56H97.9911V22.805H96.2961V26.735C96.2961 27.47 96.6261 27.845 97.2861 27.845C97.4811 27.845 97.6911 27.815 97.8861 27.755L98.0361 29.03C97.6911 29.15 97.3311 29.21 96.9261 29.21C95.6211 29.21 94.7511 28.535 94.7511 26.96ZM101.123 29L99.0226 21.56H100.538L101.933 27.065L103.433 21.56H104.963L106.448 27.065L107.843 21.56H109.358L107.258 29H105.698L104.198 23.405L102.683 29H101.123ZM109.815 25.28C109.815 22.79 111.705 21.35 113.805 21.35C115.89 21.35 117.78 22.79 117.78 25.28C117.78 27.77 115.89 29.21 113.805 29.21C111.705 29.21 109.815 27.77 109.815 25.28ZM116.205 25.28C116.205 23.765 115.11 22.775 113.805 22.775C112.485 22.775 111.39 23.765 111.39 25.28C111.39 26.795 112.485 27.785 113.805 27.785C115.11 27.785 116.205 26.795 116.205 25.28ZM119.347 29V21.56H120.907V22.82C121.312 21.92 122.077 21.35 122.992 21.35C123.217 21.35 123.427 21.38 123.637 21.44L123.382 22.88C123.187 22.805 122.992 22.775 122.782 22.775C122.227 22.775 121.777 23.015 121.432 23.48C121.087 23.945 120.907 24.515 120.907 25.19V29H119.347ZM124.855 29V18.5H126.415V24.095L128.995 21.56H130.93L128.245 24.185L131.335 29H129.565L127.15 25.25L126.415 25.97V29H124.855Z"
        fill="white"
      />
    </svg>
  );
}