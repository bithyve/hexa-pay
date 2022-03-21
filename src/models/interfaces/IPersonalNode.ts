type IPersonalNode = {
  isConnectionActive: boolean;
  ipAddress: string | null;
  portNumber: number | null;
  urlPath: string | null;
  useFallback: boolean;
};

export default IPersonalNode;
