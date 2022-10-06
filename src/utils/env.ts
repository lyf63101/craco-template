/*
 * @Author: jianwen.Wang
 * @Date: 2022-04-21 21:20:34
 * @LastEditTime: 2022-04-25 20:49:07
 * @LastEditors: jiawen.wang
 */
/**
 * Access `process.env` in an environment helper
 * Usage: `EnvHelper.env`
 * - Other static methods can be added as needed per
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
 */
export class EnvHelper {
  /**
   * @returns `process.env`
   */
  static env = process.env;
  static whitespaceRegex = /\s+/;
  static alchemyGoerliTestURI = `https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`;
  static alchemyMainnetURI = `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`;
  static scanApiKey = "1D2UHNV6SHAA6CGKRRQ72ZDSVWRDUKASJ6";
  static isDebug() {
    return localStorage.getItem("__JPG_SNIPER_DEBUG__") === "true";
  }
  static isDev() {
    const NODE_ENV = EnvHelper.env.NODE_ENV;
    const isProd = NODE_ENV === "production" || NODE_ENV?.startsWith("prod");
    return !isProd;
  }

  static evionment() {
    const NODE_ENV = EnvHelper.env.NODE_ENV;
    const isProd = NODE_ENV === "production" || NODE_ENV?.startsWith("prod");
    const isDebug = localStorage.getItem("__JPG_SNIPER_DEBUG__") === "true";
    if (!isProd || isDebug) {
      return {
        REACT_APP_CHAIN: "goerli",
        REACT_APP_CHAIN_ID: "5",
        REACT_APP_CHAIN_ID_16: "0x5",
        REACT_APP_CHAIN_NAME: "Goerli Testnet",
        REACT_APP_CHAIN_API_HOST: "https://api-goerli.etherscan.io",
        REACT_APP_CHAIN_API_KEY: "1D2UHNV6SHAA6CGKRRQ72ZDSVWRDUKASJ6",
        REACT_APP_CHAIN_RPC: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        REACT_APP_CHAIN_BLOCK: "https://goerli.etherscan.io",
      };
    }
    return {
      REACT_APP_CHAIN: "eth",
      REACT_APP_CHAIN_ID: "1",
      REACT_APP_CHAIN_ID_16: "0x1",
      REACT_APP_CHAIN_NAME: "Mainnet",
      REACT_APP_CHAIN_API_HOST: "https://api.etherscan.io",
      REACT_APP_CHAIN_API_KEY: "1D2UHNV6SHAA6CGKRRQ72ZDSVWRDUKASJ6",
      REACT_APP_CHAIN_RPC: EnvHelper.alchemyMainnetURI,
      REACT_APP_CHAIN_BLOCK: "https://etherscan.io",
    };
  }
  /**
   * Returns env contingent segment api key
   * @returns segment
   */
  static getSegmentKey() {
    return EnvHelper.env.REACT_APP_SEGMENT_API_KEY;
  }

  static getGaKey() {
    return EnvHelper.env.REACT_APP_GA_API_KEY;
  }

  static getDefaultChainID() {
    return this.evionment().REACT_APP_CHAIN_ID;
  }
  static getDefaultChainID16() {
    return this.evionment().REACT_APP_CHAIN_ID_16;
  }
  static getDefaultChainName() {
    return this.evionment().REACT_APP_CHAIN_NAME;
  }
  static getDefaultChainRPC() {
    return this.evionment().REACT_APP_CHAIN_RPC;
  }
  static getDefaultChainBlock() {
    return this.evionment().REACT_APP_CHAIN_BLOCK;
  }

  static isNotEmpty(envVariable: string) {
    if (envVariable.length > 10) {
      return true;
    } else {
      return false;
    }
  }
}
