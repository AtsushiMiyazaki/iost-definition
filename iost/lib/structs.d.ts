declare namespace IOST {
  class Tx implements ITx {
    public gasRatio: number
    public gasLimit: number
    public actions: []
    public signers: []
    public signatures: []
    public publisher: string
    public publisher_sigs: string[]
    public amount_limit: []
    public chain_id: number
    public reserved: null
    public delay: number
    public time: number
    public expiration: number

    constructor(gasRatio: number, gasLimit: string)

    setChainID: (id: number) => void
    addSigner: (name: string, permission: string) => void
    addApprove: (token: string, amount: number | string) => void
    getApproveList: () => AmountLimit[]
    addAction: (contract: string, abi: string, args: string) => void
    setTime: (
      expirationInSecound: number,
      delay: number,
      serverTimeDiff: number
    ) => void
    setGas: (gasRatio: number, gasLimit: string) => void
    addSign: (kp: KeyPair) => void
    addPublishSign: (publisher: string, kp: KeyPair) => void
  }

  interface ITx {
    gasRatio: number
    gasLimit: number
    actions: Action[]
    signers: []
    signatures: []
    publisher: string
    publisher_sigs: string[]
    amount_limit: AmountLimit[]
    chain_id: number
    reserved: null
    time: number
    expiration: number
    delay: number
  }

  interface AmountLimit {
    token: string
    value: number
  }

  interface Action {
    contract: string
    actionName: string
    data: []
  }
}
