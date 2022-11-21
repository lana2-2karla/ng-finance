export class ApiError extends Error {
  // readonly - atributo somente para leitura
  public readonly statusCode: number

  constructor (message: string, statusCode: number) {
    // super é para acessar a classe pai
    super(message)
    this.statusCode = statusCode
  }
}
