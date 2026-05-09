
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AppConfig
 * 
 */
export type AppConfig = $Result.DefaultSelection<Prisma.$AppConfigPayload>
/**
 * Model AppData
 * 
 */
export type AppData = $Result.DefaultSelection<Prisma.$AppDataPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model EventLog
 * 
 */
export type EventLog = $Result.DefaultSelection<Prisma.$EventLogPayload>
/**
 * Model CSVImport
 * 
 */
export type CSVImport = $Result.DefaultSelection<Prisma.$CSVImportPayload>
/**
 * Model ConfigVersion
 * 
 */
export type ConfigVersion = $Result.DefaultSelection<Prisma.$ConfigVersionPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more AppConfigs
 * const appConfigs = await prisma.appConfig.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more AppConfigs
   * const appConfigs = await prisma.appConfig.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.appConfig`: Exposes CRUD operations for the **AppConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppConfigs
    * const appConfigs = await prisma.appConfig.findMany()
    * ```
    */
  get appConfig(): Prisma.AppConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appData`: Exposes CRUD operations for the **AppData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppData
    * const appData = await prisma.appData.findMany()
    * ```
    */
  get appData(): Prisma.AppDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventLog`: Exposes CRUD operations for the **EventLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventLogs
    * const eventLogs = await prisma.eventLog.findMany()
    * ```
    */
  get eventLog(): Prisma.EventLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cSVImport`: Exposes CRUD operations for the **CSVImport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CSVImports
    * const cSVImports = await prisma.cSVImport.findMany()
    * ```
    */
  get cSVImport(): Prisma.CSVImportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configVersion`: Exposes CRUD operations for the **ConfigVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfigVersions
    * const configVersions = await prisma.configVersion.findMany()
    * ```
    */
  get configVersion(): Prisma.ConfigVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AppConfig: 'AppConfig',
    AppData: 'AppData',
    User: 'User',
    EventLog: 'EventLog',
    CSVImport: 'CSVImport',
    ConfigVersion: 'ConfigVersion',
    Session: 'Session',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "appConfig" | "appData" | "user" | "eventLog" | "cSVImport" | "configVersion" | "session" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AppConfig: {
        payload: Prisma.$AppConfigPayload<ExtArgs>
        fields: Prisma.AppConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          findFirst: {
            args: Prisma.AppConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          findMany: {
            args: Prisma.AppConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          create: {
            args: Prisma.AppConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          createMany: {
            args: Prisma.AppConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          delete: {
            args: Prisma.AppConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          update: {
            args: Prisma.AppConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          deleteMany: {
            args: Prisma.AppConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          upsert: {
            args: Prisma.AppConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          aggregate: {
            args: Prisma.AppConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppConfig>
          }
          groupBy: {
            args: Prisma.AppConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppConfigCountArgs<ExtArgs>
            result: $Utils.Optional<AppConfigCountAggregateOutputType> | number
          }
        }
      }
      AppData: {
        payload: Prisma.$AppDataPayload<ExtArgs>
        fields: Prisma.AppDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppDataPayload>
          }
          findFirst: {
            args: Prisma.AppDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppDataPayload>
          }
          findMany: {
            args: Prisma.AppDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppDataPayload>[]
          }
          create: {
            args: Prisma.AppDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppDataPayload>
          }
          createMany: {
            args: Prisma.AppDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppDataPayload>[]
          }
          delete: {
            args: Prisma.AppDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppDataPayload>
          }
          update: {
            args: Prisma.AppDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppDataPayload>
          }
          deleteMany: {
            args: Prisma.AppDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppDataPayload>[]
          }
          upsert: {
            args: Prisma.AppDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppDataPayload>
          }
          aggregate: {
            args: Prisma.AppDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppData>
          }
          groupBy: {
            args: Prisma.AppDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppDataCountArgs<ExtArgs>
            result: $Utils.Optional<AppDataCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EventLog: {
        payload: Prisma.$EventLogPayload<ExtArgs>
        fields: Prisma.EventLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findFirst: {
            args: Prisma.EventLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findMany: {
            args: Prisma.EventLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          create: {
            args: Prisma.EventLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          createMany: {
            args: Prisma.EventLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          delete: {
            args: Prisma.EventLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          update: {
            args: Prisma.EventLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          deleteMany: {
            args: Prisma.EventLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          upsert: {
            args: Prisma.EventLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          aggregate: {
            args: Prisma.EventLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventLog>
          }
          groupBy: {
            args: Prisma.EventLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventLogCountArgs<ExtArgs>
            result: $Utils.Optional<EventLogCountAggregateOutputType> | number
          }
        }
      }
      CSVImport: {
        payload: Prisma.$CSVImportPayload<ExtArgs>
        fields: Prisma.CSVImportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CSVImportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVImportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CSVImportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVImportPayload>
          }
          findFirst: {
            args: Prisma.CSVImportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVImportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CSVImportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVImportPayload>
          }
          findMany: {
            args: Prisma.CSVImportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVImportPayload>[]
          }
          create: {
            args: Prisma.CSVImportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVImportPayload>
          }
          createMany: {
            args: Prisma.CSVImportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CSVImportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVImportPayload>[]
          }
          delete: {
            args: Prisma.CSVImportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVImportPayload>
          }
          update: {
            args: Prisma.CSVImportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVImportPayload>
          }
          deleteMany: {
            args: Prisma.CSVImportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CSVImportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CSVImportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVImportPayload>[]
          }
          upsert: {
            args: Prisma.CSVImportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CSVImportPayload>
          }
          aggregate: {
            args: Prisma.CSVImportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCSVImport>
          }
          groupBy: {
            args: Prisma.CSVImportGroupByArgs<ExtArgs>
            result: $Utils.Optional<CSVImportGroupByOutputType>[]
          }
          count: {
            args: Prisma.CSVImportCountArgs<ExtArgs>
            result: $Utils.Optional<CSVImportCountAggregateOutputType> | number
          }
        }
      }
      ConfigVersion: {
        payload: Prisma.$ConfigVersionPayload<ExtArgs>
        fields: Prisma.ConfigVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigVersionPayload>
          }
          findFirst: {
            args: Prisma.ConfigVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigVersionPayload>
          }
          findMany: {
            args: Prisma.ConfigVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigVersionPayload>[]
          }
          create: {
            args: Prisma.ConfigVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigVersionPayload>
          }
          createMany: {
            args: Prisma.ConfigVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfigVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigVersionPayload>[]
          }
          delete: {
            args: Prisma.ConfigVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigVersionPayload>
          }
          update: {
            args: Prisma.ConfigVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigVersionPayload>
          }
          deleteMany: {
            args: Prisma.ConfigVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfigVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigVersionPayload>[]
          }
          upsert: {
            args: Prisma.ConfigVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigVersionPayload>
          }
          aggregate: {
            args: Prisma.ConfigVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfigVersion>
          }
          groupBy: {
            args: Prisma.ConfigVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigVersionCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigVersionCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    appConfig?: AppConfigOmit
    appData?: AppDataOmit
    user?: UserOmit
    eventLog?: EventLogOmit
    cSVImport?: CSVImportOmit
    configVersion?: ConfigVersionOmit
    session?: SessionOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AppConfig
   */

  export type AggregateAppConfig = {
    _count: AppConfigCountAggregateOutputType | null
    _min: AppConfigMinAggregateOutputType | null
    _max: AppConfigMaxAggregateOutputType | null
  }

  export type AppConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    version: string | null
    is_active: boolean | null
    created_by: string | null
    created_at: Date | null
    updated_at: Date | null
    previous_version_id: string | null
  }

  export type AppConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    version: string | null
    is_active: boolean | null
    created_by: string | null
    created_at: Date | null
    updated_at: Date | null
    previous_version_id: string | null
  }

  export type AppConfigCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    version: number
    config: number
    is_active: number
    created_by: number
    created_at: number
    updated_at: number
    previous_version_id: number
    _all: number
  }


  export type AppConfigMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    version?: true
    is_active?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    previous_version_id?: true
  }

  export type AppConfigMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    version?: true
    is_active?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    previous_version_id?: true
  }

  export type AppConfigCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    version?: true
    config?: true
    is_active?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    previous_version_id?: true
    _all?: true
  }

  export type AppConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppConfig to aggregate.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppConfigs
    **/
    _count?: true | AppConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppConfigMaxAggregateInputType
  }

  export type GetAppConfigAggregateType<T extends AppConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateAppConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppConfig[P]>
      : GetScalarType<T[P], AggregateAppConfig[P]>
  }




  export type AppConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppConfigWhereInput
    orderBy?: AppConfigOrderByWithAggregationInput | AppConfigOrderByWithAggregationInput[]
    by: AppConfigScalarFieldEnum[] | AppConfigScalarFieldEnum
    having?: AppConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppConfigCountAggregateInputType | true
    _min?: AppConfigMinAggregateInputType
    _max?: AppConfigMaxAggregateInputType
  }

  export type AppConfigGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    version: string
    config: JsonValue
    is_active: boolean
    created_by: string | null
    created_at: Date
    updated_at: Date
    previous_version_id: string | null
    _count: AppConfigCountAggregateOutputType | null
    _min: AppConfigMinAggregateOutputType | null
    _max: AppConfigMaxAggregateOutputType | null
  }

  type GetAppConfigGroupByPayload<T extends AppConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppConfigGroupByOutputType[P]>
            : GetScalarType<T[P], AppConfigGroupByOutputType[P]>
        }
      >
    >


  export type AppConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    version?: boolean
    config?: boolean
    is_active?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    previous_version_id?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    version?: boolean
    config?: boolean
    is_active?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    previous_version_id?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    version?: boolean
    config?: boolean
    is_active?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    previous_version_id?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    version?: boolean
    config?: boolean
    is_active?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    previous_version_id?: boolean
  }

  export type AppConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "version" | "config" | "is_active" | "created_by" | "created_at" | "updated_at" | "previous_version_id", ExtArgs["result"]["appConfig"]>

  export type $AppConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      version: string
      config: Prisma.JsonValue
      is_active: boolean
      created_by: string | null
      created_at: Date
      updated_at: Date
      previous_version_id: string | null
    }, ExtArgs["result"]["appConfig"]>
    composites: {}
  }

  type AppConfigGetPayload<S extends boolean | null | undefined | AppConfigDefaultArgs> = $Result.GetResult<Prisma.$AppConfigPayload, S>

  type AppConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppConfigCountAggregateInputType | true
    }

  export interface AppConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppConfig'], meta: { name: 'AppConfig' } }
    /**
     * Find zero or one AppConfig that matches the filter.
     * @param {AppConfigFindUniqueArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppConfigFindUniqueArgs>(args: SelectSubset<T, AppConfigFindUniqueArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppConfigFindUniqueOrThrowArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, AppConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindFirstArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppConfigFindFirstArgs>(args?: SelectSubset<T, AppConfigFindFirstArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindFirstOrThrowArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, AppConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppConfigs
     * const appConfigs = await prisma.appConfig.findMany()
     * 
     * // Get first 10 AppConfigs
     * const appConfigs = await prisma.appConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appConfigWithIdOnly = await prisma.appConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppConfigFindManyArgs>(args?: SelectSubset<T, AppConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppConfig.
     * @param {AppConfigCreateArgs} args - Arguments to create a AppConfig.
     * @example
     * // Create one AppConfig
     * const AppConfig = await prisma.appConfig.create({
     *   data: {
     *     // ... data to create a AppConfig
     *   }
     * })
     * 
     */
    create<T extends AppConfigCreateArgs>(args: SelectSubset<T, AppConfigCreateArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppConfigs.
     * @param {AppConfigCreateManyArgs} args - Arguments to create many AppConfigs.
     * @example
     * // Create many AppConfigs
     * const appConfig = await prisma.appConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppConfigCreateManyArgs>(args?: SelectSubset<T, AppConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppConfigs and returns the data saved in the database.
     * @param {AppConfigCreateManyAndReturnArgs} args - Arguments to create many AppConfigs.
     * @example
     * // Create many AppConfigs
     * const appConfig = await prisma.appConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppConfigs and only return the `id`
     * const appConfigWithIdOnly = await prisma.appConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, AppConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppConfig.
     * @param {AppConfigDeleteArgs} args - Arguments to delete one AppConfig.
     * @example
     * // Delete one AppConfig
     * const AppConfig = await prisma.appConfig.delete({
     *   where: {
     *     // ... filter to delete one AppConfig
     *   }
     * })
     * 
     */
    delete<T extends AppConfigDeleteArgs>(args: SelectSubset<T, AppConfigDeleteArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppConfig.
     * @param {AppConfigUpdateArgs} args - Arguments to update one AppConfig.
     * @example
     * // Update one AppConfig
     * const appConfig = await prisma.appConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppConfigUpdateArgs>(args: SelectSubset<T, AppConfigUpdateArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppConfigs.
     * @param {AppConfigDeleteManyArgs} args - Arguments to filter AppConfigs to delete.
     * @example
     * // Delete a few AppConfigs
     * const { count } = await prisma.appConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppConfigDeleteManyArgs>(args?: SelectSubset<T, AppConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppConfigs
     * const appConfig = await prisma.appConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppConfigUpdateManyArgs>(args: SelectSubset<T, AppConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppConfigs and returns the data updated in the database.
     * @param {AppConfigUpdateManyAndReturnArgs} args - Arguments to update many AppConfigs.
     * @example
     * // Update many AppConfigs
     * const appConfig = await prisma.appConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppConfigs and only return the `id`
     * const appConfigWithIdOnly = await prisma.appConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, AppConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppConfig.
     * @param {AppConfigUpsertArgs} args - Arguments to update or create a AppConfig.
     * @example
     * // Update or create a AppConfig
     * const appConfig = await prisma.appConfig.upsert({
     *   create: {
     *     // ... data to create a AppConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppConfig we want to update
     *   }
     * })
     */
    upsert<T extends AppConfigUpsertArgs>(args: SelectSubset<T, AppConfigUpsertArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigCountArgs} args - Arguments to filter AppConfigs to count.
     * @example
     * // Count the number of AppConfigs
     * const count = await prisma.appConfig.count({
     *   where: {
     *     // ... the filter for the AppConfigs we want to count
     *   }
     * })
    **/
    count<T extends AppConfigCountArgs>(
      args?: Subset<T, AppConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppConfigAggregateArgs>(args: Subset<T, AppConfigAggregateArgs>): Prisma.PrismaPromise<GetAppConfigAggregateType<T>>

    /**
     * Group by AppConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppConfigGroupByArgs['orderBy'] }
        : { orderBy?: AppConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppConfig model
   */
  readonly fields: AppConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppConfig model
   */
  interface AppConfigFieldRefs {
    readonly id: FieldRef<"AppConfig", 'String'>
    readonly name: FieldRef<"AppConfig", 'String'>
    readonly slug: FieldRef<"AppConfig", 'String'>
    readonly description: FieldRef<"AppConfig", 'String'>
    readonly version: FieldRef<"AppConfig", 'String'>
    readonly config: FieldRef<"AppConfig", 'Json'>
    readonly is_active: FieldRef<"AppConfig", 'Boolean'>
    readonly created_by: FieldRef<"AppConfig", 'String'>
    readonly created_at: FieldRef<"AppConfig", 'DateTime'>
    readonly updated_at: FieldRef<"AppConfig", 'DateTime'>
    readonly previous_version_id: FieldRef<"AppConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AppConfig findUnique
   */
  export type AppConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig findUniqueOrThrow
   */
  export type AppConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig findFirst
   */
  export type AppConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppConfigs.
     */
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig findFirstOrThrow
   */
  export type AppConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppConfigs.
     */
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig findMany
   */
  export type AppConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfigs to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppConfigs.
     */
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig create
   */
  export type AppConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a AppConfig.
     */
    data: XOR<AppConfigCreateInput, AppConfigUncheckedCreateInput>
  }

  /**
   * AppConfig createMany
   */
  export type AppConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppConfigs.
     */
    data: AppConfigCreateManyInput | AppConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppConfig createManyAndReturn
   */
  export type AppConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data used to create many AppConfigs.
     */
    data: AppConfigCreateManyInput | AppConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppConfig update
   */
  export type AppConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a AppConfig.
     */
    data: XOR<AppConfigUpdateInput, AppConfigUncheckedUpdateInput>
    /**
     * Choose, which AppConfig to update.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig updateMany
   */
  export type AppConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppConfigs.
     */
    data: XOR<AppConfigUpdateManyMutationInput, AppConfigUncheckedUpdateManyInput>
    /**
     * Filter which AppConfigs to update
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to update.
     */
    limit?: number
  }

  /**
   * AppConfig updateManyAndReturn
   */
  export type AppConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data used to update AppConfigs.
     */
    data: XOR<AppConfigUpdateManyMutationInput, AppConfigUncheckedUpdateManyInput>
    /**
     * Filter which AppConfigs to update
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to update.
     */
    limit?: number
  }

  /**
   * AppConfig upsert
   */
  export type AppConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the AppConfig to update in case it exists.
     */
    where: AppConfigWhereUniqueInput
    /**
     * In case the AppConfig found by the `where` argument doesn't exist, create a new AppConfig with this data.
     */
    create: XOR<AppConfigCreateInput, AppConfigUncheckedCreateInput>
    /**
     * In case the AppConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppConfigUpdateInput, AppConfigUncheckedUpdateInput>
  }

  /**
   * AppConfig delete
   */
  export type AppConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter which AppConfig to delete.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig deleteMany
   */
  export type AppConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppConfigs to delete
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to delete.
     */
    limit?: number
  }

  /**
   * AppConfig without action
   */
  export type AppConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
  }


  /**
   * Model AppData
   */

  export type AggregateAppData = {
    _count: AppDataCountAggregateOutputType | null
    _avg: AppDataAvgAggregateOutputType | null
    _sum: AppDataSumAggregateOutputType | null
    _min: AppDataMinAggregateOutputType | null
    _max: AppDataMaxAggregateOutputType | null
  }

  export type AppDataAvgAggregateOutputType = {
    version: number | null
  }

  export type AppDataSumAggregateOutputType = {
    version: number | null
  }

  export type AppDataMinAggregateOutputType = {
    id: string | null
    config_slug: string | null
    config_version: string | null
    entity_slug: string | null
    owner_id: string | null
    version: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AppDataMaxAggregateOutputType = {
    id: string | null
    config_slug: string | null
    config_version: string | null
    entity_slug: string | null
    owner_id: string | null
    version: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AppDataCountAggregateOutputType = {
    id: number
    config_slug: number
    config_version: number
    entity_slug: number
    owner_id: number
    payload: number
    version: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AppDataAvgAggregateInputType = {
    version?: true
  }

  export type AppDataSumAggregateInputType = {
    version?: true
  }

  export type AppDataMinAggregateInputType = {
    id?: true
    config_slug?: true
    config_version?: true
    entity_slug?: true
    owner_id?: true
    version?: true
    created_at?: true
    updated_at?: true
  }

  export type AppDataMaxAggregateInputType = {
    id?: true
    config_slug?: true
    config_version?: true
    entity_slug?: true
    owner_id?: true
    version?: true
    created_at?: true
    updated_at?: true
  }

  export type AppDataCountAggregateInputType = {
    id?: true
    config_slug?: true
    config_version?: true
    entity_slug?: true
    owner_id?: true
    payload?: true
    version?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AppDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppData to aggregate.
     */
    where?: AppDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppData to fetch.
     */
    orderBy?: AppDataOrderByWithRelationInput | AppDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppData
    **/
    _count?: true | AppDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppDataMaxAggregateInputType
  }

  export type GetAppDataAggregateType<T extends AppDataAggregateArgs> = {
        [P in keyof T & keyof AggregateAppData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppData[P]>
      : GetScalarType<T[P], AggregateAppData[P]>
  }




  export type AppDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppDataWhereInput
    orderBy?: AppDataOrderByWithAggregationInput | AppDataOrderByWithAggregationInput[]
    by: AppDataScalarFieldEnum[] | AppDataScalarFieldEnum
    having?: AppDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppDataCountAggregateInputType | true
    _avg?: AppDataAvgAggregateInputType
    _sum?: AppDataSumAggregateInputType
    _min?: AppDataMinAggregateInputType
    _max?: AppDataMaxAggregateInputType
  }

  export type AppDataGroupByOutputType = {
    id: string
    config_slug: string
    config_version: string
    entity_slug: string
    owner_id: string | null
    payload: JsonValue
    version: number
    created_at: Date
    updated_at: Date
    _count: AppDataCountAggregateOutputType | null
    _avg: AppDataAvgAggregateOutputType | null
    _sum: AppDataSumAggregateOutputType | null
    _min: AppDataMinAggregateOutputType | null
    _max: AppDataMaxAggregateOutputType | null
  }

  type GetAppDataGroupByPayload<T extends AppDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppDataGroupByOutputType[P]>
            : GetScalarType<T[P], AppDataGroupByOutputType[P]>
        }
      >
    >


  export type AppDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config_slug?: boolean
    config_version?: boolean
    entity_slug?: boolean
    owner_id?: boolean
    payload?: boolean
    version?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["appData"]>

  export type AppDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config_slug?: boolean
    config_version?: boolean
    entity_slug?: boolean
    owner_id?: boolean
    payload?: boolean
    version?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["appData"]>

  export type AppDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config_slug?: boolean
    config_version?: boolean
    entity_slug?: boolean
    owner_id?: boolean
    payload?: boolean
    version?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["appData"]>

  export type AppDataSelectScalar = {
    id?: boolean
    config_slug?: boolean
    config_version?: boolean
    entity_slug?: boolean
    owner_id?: boolean
    payload?: boolean
    version?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AppDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "config_slug" | "config_version" | "entity_slug" | "owner_id" | "payload" | "version" | "created_at" | "updated_at", ExtArgs["result"]["appData"]>

  export type $AppDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      config_slug: string
      config_version: string
      entity_slug: string
      owner_id: string | null
      payload: Prisma.JsonValue
      version: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["appData"]>
    composites: {}
  }

  type AppDataGetPayload<S extends boolean | null | undefined | AppDataDefaultArgs> = $Result.GetResult<Prisma.$AppDataPayload, S>

  type AppDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppDataCountAggregateInputType | true
    }

  export interface AppDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppData'], meta: { name: 'AppData' } }
    /**
     * Find zero or one AppData that matches the filter.
     * @param {AppDataFindUniqueArgs} args - Arguments to find a AppData
     * @example
     * // Get one AppData
     * const appData = await prisma.appData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppDataFindUniqueArgs>(args: SelectSubset<T, AppDataFindUniqueArgs<ExtArgs>>): Prisma__AppDataClient<$Result.GetResult<Prisma.$AppDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppDataFindUniqueOrThrowArgs} args - Arguments to find a AppData
     * @example
     * // Get one AppData
     * const appData = await prisma.appData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppDataFindUniqueOrThrowArgs>(args: SelectSubset<T, AppDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppDataClient<$Result.GetResult<Prisma.$AppDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppDataFindFirstArgs} args - Arguments to find a AppData
     * @example
     * // Get one AppData
     * const appData = await prisma.appData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppDataFindFirstArgs>(args?: SelectSubset<T, AppDataFindFirstArgs<ExtArgs>>): Prisma__AppDataClient<$Result.GetResult<Prisma.$AppDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppDataFindFirstOrThrowArgs} args - Arguments to find a AppData
     * @example
     * // Get one AppData
     * const appData = await prisma.appData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppDataFindFirstOrThrowArgs>(args?: SelectSubset<T, AppDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppDataClient<$Result.GetResult<Prisma.$AppDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppData
     * const appData = await prisma.appData.findMany()
     * 
     * // Get first 10 AppData
     * const appData = await prisma.appData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appDataWithIdOnly = await prisma.appData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppDataFindManyArgs>(args?: SelectSubset<T, AppDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppData.
     * @param {AppDataCreateArgs} args - Arguments to create a AppData.
     * @example
     * // Create one AppData
     * const AppData = await prisma.appData.create({
     *   data: {
     *     // ... data to create a AppData
     *   }
     * })
     * 
     */
    create<T extends AppDataCreateArgs>(args: SelectSubset<T, AppDataCreateArgs<ExtArgs>>): Prisma__AppDataClient<$Result.GetResult<Prisma.$AppDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppData.
     * @param {AppDataCreateManyArgs} args - Arguments to create many AppData.
     * @example
     * // Create many AppData
     * const appData = await prisma.appData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppDataCreateManyArgs>(args?: SelectSubset<T, AppDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppData and returns the data saved in the database.
     * @param {AppDataCreateManyAndReturnArgs} args - Arguments to create many AppData.
     * @example
     * // Create many AppData
     * const appData = await prisma.appData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppData and only return the `id`
     * const appDataWithIdOnly = await prisma.appData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppDataCreateManyAndReturnArgs>(args?: SelectSubset<T, AppDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppData.
     * @param {AppDataDeleteArgs} args - Arguments to delete one AppData.
     * @example
     * // Delete one AppData
     * const AppData = await prisma.appData.delete({
     *   where: {
     *     // ... filter to delete one AppData
     *   }
     * })
     * 
     */
    delete<T extends AppDataDeleteArgs>(args: SelectSubset<T, AppDataDeleteArgs<ExtArgs>>): Prisma__AppDataClient<$Result.GetResult<Prisma.$AppDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppData.
     * @param {AppDataUpdateArgs} args - Arguments to update one AppData.
     * @example
     * // Update one AppData
     * const appData = await prisma.appData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppDataUpdateArgs>(args: SelectSubset<T, AppDataUpdateArgs<ExtArgs>>): Prisma__AppDataClient<$Result.GetResult<Prisma.$AppDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppData.
     * @param {AppDataDeleteManyArgs} args - Arguments to filter AppData to delete.
     * @example
     * // Delete a few AppData
     * const { count } = await prisma.appData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppDataDeleteManyArgs>(args?: SelectSubset<T, AppDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppData
     * const appData = await prisma.appData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppDataUpdateManyArgs>(args: SelectSubset<T, AppDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppData and returns the data updated in the database.
     * @param {AppDataUpdateManyAndReturnArgs} args - Arguments to update many AppData.
     * @example
     * // Update many AppData
     * const appData = await prisma.appData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppData and only return the `id`
     * const appDataWithIdOnly = await prisma.appData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppDataUpdateManyAndReturnArgs>(args: SelectSubset<T, AppDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppData.
     * @param {AppDataUpsertArgs} args - Arguments to update or create a AppData.
     * @example
     * // Update or create a AppData
     * const appData = await prisma.appData.upsert({
     *   create: {
     *     // ... data to create a AppData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppData we want to update
     *   }
     * })
     */
    upsert<T extends AppDataUpsertArgs>(args: SelectSubset<T, AppDataUpsertArgs<ExtArgs>>): Prisma__AppDataClient<$Result.GetResult<Prisma.$AppDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppDataCountArgs} args - Arguments to filter AppData to count.
     * @example
     * // Count the number of AppData
     * const count = await prisma.appData.count({
     *   where: {
     *     // ... the filter for the AppData we want to count
     *   }
     * })
    **/
    count<T extends AppDataCountArgs>(
      args?: Subset<T, AppDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppDataAggregateArgs>(args: Subset<T, AppDataAggregateArgs>): Prisma.PrismaPromise<GetAppDataAggregateType<T>>

    /**
     * Group by AppData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppDataGroupByArgs['orderBy'] }
        : { orderBy?: AppDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppData model
   */
  readonly fields: AppDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppData model
   */
  interface AppDataFieldRefs {
    readonly id: FieldRef<"AppData", 'String'>
    readonly config_slug: FieldRef<"AppData", 'String'>
    readonly config_version: FieldRef<"AppData", 'String'>
    readonly entity_slug: FieldRef<"AppData", 'String'>
    readonly owner_id: FieldRef<"AppData", 'String'>
    readonly payload: FieldRef<"AppData", 'Json'>
    readonly version: FieldRef<"AppData", 'Int'>
    readonly created_at: FieldRef<"AppData", 'DateTime'>
    readonly updated_at: FieldRef<"AppData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppData findUnique
   */
  export type AppDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
    /**
     * Filter, which AppData to fetch.
     */
    where: AppDataWhereUniqueInput
  }

  /**
   * AppData findUniqueOrThrow
   */
  export type AppDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
    /**
     * Filter, which AppData to fetch.
     */
    where: AppDataWhereUniqueInput
  }

  /**
   * AppData findFirst
   */
  export type AppDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
    /**
     * Filter, which AppData to fetch.
     */
    where?: AppDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppData to fetch.
     */
    orderBy?: AppDataOrderByWithRelationInput | AppDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppData.
     */
    cursor?: AppDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppData.
     */
    distinct?: AppDataScalarFieldEnum | AppDataScalarFieldEnum[]
  }

  /**
   * AppData findFirstOrThrow
   */
  export type AppDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
    /**
     * Filter, which AppData to fetch.
     */
    where?: AppDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppData to fetch.
     */
    orderBy?: AppDataOrderByWithRelationInput | AppDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppData.
     */
    cursor?: AppDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppData.
     */
    distinct?: AppDataScalarFieldEnum | AppDataScalarFieldEnum[]
  }

  /**
   * AppData findMany
   */
  export type AppDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
    /**
     * Filter, which AppData to fetch.
     */
    where?: AppDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppData to fetch.
     */
    orderBy?: AppDataOrderByWithRelationInput | AppDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppData.
     */
    cursor?: AppDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppData.
     */
    distinct?: AppDataScalarFieldEnum | AppDataScalarFieldEnum[]
  }

  /**
   * AppData create
   */
  export type AppDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
    /**
     * The data needed to create a AppData.
     */
    data: XOR<AppDataCreateInput, AppDataUncheckedCreateInput>
  }

  /**
   * AppData createMany
   */
  export type AppDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppData.
     */
    data: AppDataCreateManyInput | AppDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppData createManyAndReturn
   */
  export type AppDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
    /**
     * The data used to create many AppData.
     */
    data: AppDataCreateManyInput | AppDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppData update
   */
  export type AppDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
    /**
     * The data needed to update a AppData.
     */
    data: XOR<AppDataUpdateInput, AppDataUncheckedUpdateInput>
    /**
     * Choose, which AppData to update.
     */
    where: AppDataWhereUniqueInput
  }

  /**
   * AppData updateMany
   */
  export type AppDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppData.
     */
    data: XOR<AppDataUpdateManyMutationInput, AppDataUncheckedUpdateManyInput>
    /**
     * Filter which AppData to update
     */
    where?: AppDataWhereInput
    /**
     * Limit how many AppData to update.
     */
    limit?: number
  }

  /**
   * AppData updateManyAndReturn
   */
  export type AppDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
    /**
     * The data used to update AppData.
     */
    data: XOR<AppDataUpdateManyMutationInput, AppDataUncheckedUpdateManyInput>
    /**
     * Filter which AppData to update
     */
    where?: AppDataWhereInput
    /**
     * Limit how many AppData to update.
     */
    limit?: number
  }

  /**
   * AppData upsert
   */
  export type AppDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
    /**
     * The filter to search for the AppData to update in case it exists.
     */
    where: AppDataWhereUniqueInput
    /**
     * In case the AppData found by the `where` argument doesn't exist, create a new AppData with this data.
     */
    create: XOR<AppDataCreateInput, AppDataUncheckedCreateInput>
    /**
     * In case the AppData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppDataUpdateInput, AppDataUncheckedUpdateInput>
  }

  /**
   * AppData delete
   */
  export type AppDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
    /**
     * Filter which AppData to delete.
     */
    where: AppDataWhereUniqueInput
  }

  /**
   * AppData deleteMany
   */
  export type AppDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppData to delete
     */
    where?: AppDataWhereInput
    /**
     * Limit how many AppData to delete.
     */
    limit?: number
  }

  /**
   * AppData without action
   */
  export type AppDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppData
     */
    select?: AppDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppData
     */
    omit?: AppDataOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    avatar: string | null
    last_login: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    avatar: string | null
    last_login: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    avatar: number
    preferences: number
    last_login: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    avatar?: true
    last_login?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    avatar?: true
    last_login?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    avatar?: true
    preferences?: true
    last_login?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    role: string
    avatar: string | null
    preferences: JsonValue | null
    last_login: Date | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    avatar?: boolean
    preferences?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    avatar?: boolean
    preferences?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    avatar?: boolean
    preferences?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    avatar?: boolean
    preferences?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "avatar" | "preferences" | "last_login" | "created_at" | "updated_at", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: string
      avatar: string | null
      preferences: Prisma.JsonValue | null
      last_login: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly preferences: FieldRef<"User", 'Json'>
    readonly last_login: FieldRef<"User", 'DateTime'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model EventLog
   */

  export type AggregateEventLog = {
    _count: EventLogCountAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  export type EventLogMinAggregateOutputType = {
    id: string | null
    event_type: string | null
    source: string | null
    user_id: string | null
    config_slug: string | null
    entity_slug: string | null
    severity: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type EventLogMaxAggregateOutputType = {
    id: string | null
    event_type: string | null
    source: string | null
    user_id: string | null
    config_slug: string | null
    entity_slug: string | null
    severity: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type EventLogCountAggregateOutputType = {
    id: number
    event_type: number
    source: number
    user_id: number
    config_slug: number
    entity_slug: number
    data: number
    severity: number
    ip_address: number
    user_agent: number
    created_at: number
    _all: number
  }


  export type EventLogMinAggregateInputType = {
    id?: true
    event_type?: true
    source?: true
    user_id?: true
    config_slug?: true
    entity_slug?: true
    severity?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type EventLogMaxAggregateInputType = {
    id?: true
    event_type?: true
    source?: true
    user_id?: true
    config_slug?: true
    entity_slug?: true
    severity?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type EventLogCountAggregateInputType = {
    id?: true
    event_type?: true
    source?: true
    user_id?: true
    config_slug?: true
    entity_slug?: true
    data?: true
    severity?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
    _all?: true
  }

  export type EventLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLog to aggregate.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventLogs
    **/
    _count?: true | EventLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventLogMaxAggregateInputType
  }

  export type GetEventLogAggregateType<T extends EventLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEventLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventLog[P]>
      : GetScalarType<T[P], AggregateEventLog[P]>
  }




  export type EventLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithAggregationInput | EventLogOrderByWithAggregationInput[]
    by: EventLogScalarFieldEnum[] | EventLogScalarFieldEnum
    having?: EventLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventLogCountAggregateInputType | true
    _min?: EventLogMinAggregateInputType
    _max?: EventLogMaxAggregateInputType
  }

  export type EventLogGroupByOutputType = {
    id: string
    event_type: string
    source: string
    user_id: string | null
    config_slug: string | null
    entity_slug: string | null
    data: JsonValue | null
    severity: string
    ip_address: string | null
    user_agent: string | null
    created_at: Date
    _count: EventLogCountAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  type GetEventLogGroupByPayload<T extends EventLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventLogGroupByOutputType[P]>
            : GetScalarType<T[P], EventLogGroupByOutputType[P]>
        }
      >
    >


  export type EventLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_type?: boolean
    source?: boolean
    user_id?: boolean
    config_slug?: boolean
    entity_slug?: boolean
    data?: boolean
    severity?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["eventLog"]>

  export type EventLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_type?: boolean
    source?: boolean
    user_id?: boolean
    config_slug?: boolean
    entity_slug?: boolean
    data?: boolean
    severity?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["eventLog"]>

  export type EventLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_type?: boolean
    source?: boolean
    user_id?: boolean
    config_slug?: boolean
    entity_slug?: boolean
    data?: boolean
    severity?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["eventLog"]>

  export type EventLogSelectScalar = {
    id?: boolean
    event_type?: boolean
    source?: boolean
    user_id?: boolean
    config_slug?: boolean
    entity_slug?: boolean
    data?: boolean
    severity?: boolean
    ip_address?: boolean
    user_agent?: boolean
    created_at?: boolean
  }

  export type EventLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_type" | "source" | "user_id" | "config_slug" | "entity_slug" | "data" | "severity" | "ip_address" | "user_agent" | "created_at", ExtArgs["result"]["eventLog"]>

  export type $EventLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_type: string
      source: string
      user_id: string | null
      config_slug: string | null
      entity_slug: string | null
      data: Prisma.JsonValue | null
      severity: string
      ip_address: string | null
      user_agent: string | null
      created_at: Date
    }, ExtArgs["result"]["eventLog"]>
    composites: {}
  }

  type EventLogGetPayload<S extends boolean | null | undefined | EventLogDefaultArgs> = $Result.GetResult<Prisma.$EventLogPayload, S>

  type EventLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventLogCountAggregateInputType | true
    }

  export interface EventLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventLog'], meta: { name: 'EventLog' } }
    /**
     * Find zero or one EventLog that matches the filter.
     * @param {EventLogFindUniqueArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventLogFindUniqueArgs>(args: SelectSubset<T, EventLogFindUniqueArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventLogFindUniqueOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EventLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventLogFindFirstArgs>(args?: SelectSubset<T, EventLogFindFirstArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EventLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventLogs
     * const eventLogs = await prisma.eventLog.findMany()
     * 
     * // Get first 10 EventLogs
     * const eventLogs = await prisma.eventLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventLogWithIdOnly = await prisma.eventLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventLogFindManyArgs>(args?: SelectSubset<T, EventLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventLog.
     * @param {EventLogCreateArgs} args - Arguments to create a EventLog.
     * @example
     * // Create one EventLog
     * const EventLog = await prisma.eventLog.create({
     *   data: {
     *     // ... data to create a EventLog
     *   }
     * })
     * 
     */
    create<T extends EventLogCreateArgs>(args: SelectSubset<T, EventLogCreateArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventLogs.
     * @param {EventLogCreateManyArgs} args - Arguments to create many EventLogs.
     * @example
     * // Create many EventLogs
     * const eventLog = await prisma.eventLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventLogCreateManyArgs>(args?: SelectSubset<T, EventLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventLogs and returns the data saved in the database.
     * @param {EventLogCreateManyAndReturnArgs} args - Arguments to create many EventLogs.
     * @example
     * // Create many EventLogs
     * const eventLog = await prisma.eventLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventLogs and only return the `id`
     * const eventLogWithIdOnly = await prisma.eventLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EventLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventLog.
     * @param {EventLogDeleteArgs} args - Arguments to delete one EventLog.
     * @example
     * // Delete one EventLog
     * const EventLog = await prisma.eventLog.delete({
     *   where: {
     *     // ... filter to delete one EventLog
     *   }
     * })
     * 
     */
    delete<T extends EventLogDeleteArgs>(args: SelectSubset<T, EventLogDeleteArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventLog.
     * @param {EventLogUpdateArgs} args - Arguments to update one EventLog.
     * @example
     * // Update one EventLog
     * const eventLog = await prisma.eventLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventLogUpdateArgs>(args: SelectSubset<T, EventLogUpdateArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventLogs.
     * @param {EventLogDeleteManyArgs} args - Arguments to filter EventLogs to delete.
     * @example
     * // Delete a few EventLogs
     * const { count } = await prisma.eventLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventLogDeleteManyArgs>(args?: SelectSubset<T, EventLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventLogs
     * const eventLog = await prisma.eventLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventLogUpdateManyArgs>(args: SelectSubset<T, EventLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventLogs and returns the data updated in the database.
     * @param {EventLogUpdateManyAndReturnArgs} args - Arguments to update many EventLogs.
     * @example
     * // Update many EventLogs
     * const eventLog = await prisma.eventLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventLogs and only return the `id`
     * const eventLogWithIdOnly = await prisma.eventLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventLogUpdateManyAndReturnArgs>(args: SelectSubset<T, EventLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventLog.
     * @param {EventLogUpsertArgs} args - Arguments to update or create a EventLog.
     * @example
     * // Update or create a EventLog
     * const eventLog = await prisma.eventLog.upsert({
     *   create: {
     *     // ... data to create a EventLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventLog we want to update
     *   }
     * })
     */
    upsert<T extends EventLogUpsertArgs>(args: SelectSubset<T, EventLogUpsertArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogCountArgs} args - Arguments to filter EventLogs to count.
     * @example
     * // Count the number of EventLogs
     * const count = await prisma.eventLog.count({
     *   where: {
     *     // ... the filter for the EventLogs we want to count
     *   }
     * })
    **/
    count<T extends EventLogCountArgs>(
      args?: Subset<T, EventLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventLogAggregateArgs>(args: Subset<T, EventLogAggregateArgs>): Prisma.PrismaPromise<GetEventLogAggregateType<T>>

    /**
     * Group by EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventLogGroupByArgs['orderBy'] }
        : { orderBy?: EventLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventLog model
   */
  readonly fields: EventLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventLog model
   */
  interface EventLogFieldRefs {
    readonly id: FieldRef<"EventLog", 'String'>
    readonly event_type: FieldRef<"EventLog", 'String'>
    readonly source: FieldRef<"EventLog", 'String'>
    readonly user_id: FieldRef<"EventLog", 'String'>
    readonly config_slug: FieldRef<"EventLog", 'String'>
    readonly entity_slug: FieldRef<"EventLog", 'String'>
    readonly data: FieldRef<"EventLog", 'Json'>
    readonly severity: FieldRef<"EventLog", 'String'>
    readonly ip_address: FieldRef<"EventLog", 'String'>
    readonly user_agent: FieldRef<"EventLog", 'String'>
    readonly created_at: FieldRef<"EventLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventLog findUnique
   */
  export type EventLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog findUniqueOrThrow
   */
  export type EventLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog findFirst
   */
  export type EventLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog findFirstOrThrow
   */
  export type EventLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog findMany
   */
  export type EventLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Filter, which EventLogs to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog create
   */
  export type EventLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * The data needed to create a EventLog.
     */
    data: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
  }

  /**
   * EventLog createMany
   */
  export type EventLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventLogs.
     */
    data: EventLogCreateManyInput | EventLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventLog createManyAndReturn
   */
  export type EventLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * The data used to create many EventLogs.
     */
    data: EventLogCreateManyInput | EventLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventLog update
   */
  export type EventLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * The data needed to update a EventLog.
     */
    data: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
    /**
     * Choose, which EventLog to update.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog updateMany
   */
  export type EventLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventLogs.
     */
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyInput>
    /**
     * Filter which EventLogs to update
     */
    where?: EventLogWhereInput
    /**
     * Limit how many EventLogs to update.
     */
    limit?: number
  }

  /**
   * EventLog updateManyAndReturn
   */
  export type EventLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * The data used to update EventLogs.
     */
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyInput>
    /**
     * Filter which EventLogs to update
     */
    where?: EventLogWhereInput
    /**
     * Limit how many EventLogs to update.
     */
    limit?: number
  }

  /**
   * EventLog upsert
   */
  export type EventLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * The filter to search for the EventLog to update in case it exists.
     */
    where: EventLogWhereUniqueInput
    /**
     * In case the EventLog found by the `where` argument doesn't exist, create a new EventLog with this data.
     */
    create: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
    /**
     * In case the EventLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
  }

  /**
   * EventLog delete
   */
  export type EventLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Filter which EventLog to delete.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog deleteMany
   */
  export type EventLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLogs to delete
     */
    where?: EventLogWhereInput
    /**
     * Limit how many EventLogs to delete.
     */
    limit?: number
  }

  /**
   * EventLog without action
   */
  export type EventLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
  }


  /**
   * Model CSVImport
   */

  export type AggregateCSVImport = {
    _count: CSVImportCountAggregateOutputType | null
    _avg: CSVImportAvgAggregateOutputType | null
    _sum: CSVImportSumAggregateOutputType | null
    _min: CSVImportMinAggregateOutputType | null
    _max: CSVImportMaxAggregateOutputType | null
  }

  export type CSVImportAvgAggregateOutputType = {
    total_rows: number | null
    success_rows: number | null
    error_rows: number | null
  }

  export type CSVImportSumAggregateOutputType = {
    total_rows: number | null
    success_rows: number | null
    error_rows: number | null
  }

  export type CSVImportMinAggregateOutputType = {
    id: string | null
    config_slug: string | null
    config_version: string | null
    entity_slug: string | null
    filename: string | null
    status: string | null
    total_rows: number | null
    success_rows: number | null
    error_rows: number | null
    created_by: string | null
    created_at: Date | null
    completed_at: Date | null
  }

  export type CSVImportMaxAggregateOutputType = {
    id: string | null
    config_slug: string | null
    config_version: string | null
    entity_slug: string | null
    filename: string | null
    status: string | null
    total_rows: number | null
    success_rows: number | null
    error_rows: number | null
    created_by: string | null
    created_at: Date | null
    completed_at: Date | null
  }

  export type CSVImportCountAggregateOutputType = {
    id: number
    config_slug: number
    config_version: number
    entity_slug: number
    filename: number
    mapping: number
    type_inference: number
    status: number
    total_rows: number
    success_rows: number
    error_rows: number
    errors: number
    created_by: number
    created_at: number
    completed_at: number
    _all: number
  }


  export type CSVImportAvgAggregateInputType = {
    total_rows?: true
    success_rows?: true
    error_rows?: true
  }

  export type CSVImportSumAggregateInputType = {
    total_rows?: true
    success_rows?: true
    error_rows?: true
  }

  export type CSVImportMinAggregateInputType = {
    id?: true
    config_slug?: true
    config_version?: true
    entity_slug?: true
    filename?: true
    status?: true
    total_rows?: true
    success_rows?: true
    error_rows?: true
    created_by?: true
    created_at?: true
    completed_at?: true
  }

  export type CSVImportMaxAggregateInputType = {
    id?: true
    config_slug?: true
    config_version?: true
    entity_slug?: true
    filename?: true
    status?: true
    total_rows?: true
    success_rows?: true
    error_rows?: true
    created_by?: true
    created_at?: true
    completed_at?: true
  }

  export type CSVImportCountAggregateInputType = {
    id?: true
    config_slug?: true
    config_version?: true
    entity_slug?: true
    filename?: true
    mapping?: true
    type_inference?: true
    status?: true
    total_rows?: true
    success_rows?: true
    error_rows?: true
    errors?: true
    created_by?: true
    created_at?: true
    completed_at?: true
    _all?: true
  }

  export type CSVImportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CSVImport to aggregate.
     */
    where?: CSVImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSVImports to fetch.
     */
    orderBy?: CSVImportOrderByWithRelationInput | CSVImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CSVImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSVImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSVImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CSVImports
    **/
    _count?: true | CSVImportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CSVImportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CSVImportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CSVImportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CSVImportMaxAggregateInputType
  }

  export type GetCSVImportAggregateType<T extends CSVImportAggregateArgs> = {
        [P in keyof T & keyof AggregateCSVImport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCSVImport[P]>
      : GetScalarType<T[P], AggregateCSVImport[P]>
  }




  export type CSVImportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CSVImportWhereInput
    orderBy?: CSVImportOrderByWithAggregationInput | CSVImportOrderByWithAggregationInput[]
    by: CSVImportScalarFieldEnum[] | CSVImportScalarFieldEnum
    having?: CSVImportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CSVImportCountAggregateInputType | true
    _avg?: CSVImportAvgAggregateInputType
    _sum?: CSVImportSumAggregateInputType
    _min?: CSVImportMinAggregateInputType
    _max?: CSVImportMaxAggregateInputType
  }

  export type CSVImportGroupByOutputType = {
    id: string
    config_slug: string
    config_version: string
    entity_slug: string
    filename: string
    mapping: JsonValue
    type_inference: JsonValue | null
    status: string
    total_rows: number
    success_rows: number
    error_rows: number
    errors: JsonValue | null
    created_by: string | null
    created_at: Date
    completed_at: Date | null
    _count: CSVImportCountAggregateOutputType | null
    _avg: CSVImportAvgAggregateOutputType | null
    _sum: CSVImportSumAggregateOutputType | null
    _min: CSVImportMinAggregateOutputType | null
    _max: CSVImportMaxAggregateOutputType | null
  }

  type GetCSVImportGroupByPayload<T extends CSVImportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CSVImportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CSVImportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CSVImportGroupByOutputType[P]>
            : GetScalarType<T[P], CSVImportGroupByOutputType[P]>
        }
      >
    >


  export type CSVImportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config_slug?: boolean
    config_version?: boolean
    entity_slug?: boolean
    filename?: boolean
    mapping?: boolean
    type_inference?: boolean
    status?: boolean
    total_rows?: boolean
    success_rows?: boolean
    error_rows?: boolean
    errors?: boolean
    created_by?: boolean
    created_at?: boolean
    completed_at?: boolean
  }, ExtArgs["result"]["cSVImport"]>

  export type CSVImportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config_slug?: boolean
    config_version?: boolean
    entity_slug?: boolean
    filename?: boolean
    mapping?: boolean
    type_inference?: boolean
    status?: boolean
    total_rows?: boolean
    success_rows?: boolean
    error_rows?: boolean
    errors?: boolean
    created_by?: boolean
    created_at?: boolean
    completed_at?: boolean
  }, ExtArgs["result"]["cSVImport"]>

  export type CSVImportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config_slug?: boolean
    config_version?: boolean
    entity_slug?: boolean
    filename?: boolean
    mapping?: boolean
    type_inference?: boolean
    status?: boolean
    total_rows?: boolean
    success_rows?: boolean
    error_rows?: boolean
    errors?: boolean
    created_by?: boolean
    created_at?: boolean
    completed_at?: boolean
  }, ExtArgs["result"]["cSVImport"]>

  export type CSVImportSelectScalar = {
    id?: boolean
    config_slug?: boolean
    config_version?: boolean
    entity_slug?: boolean
    filename?: boolean
    mapping?: boolean
    type_inference?: boolean
    status?: boolean
    total_rows?: boolean
    success_rows?: boolean
    error_rows?: boolean
    errors?: boolean
    created_by?: boolean
    created_at?: boolean
    completed_at?: boolean
  }

  export type CSVImportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "config_slug" | "config_version" | "entity_slug" | "filename" | "mapping" | "type_inference" | "status" | "total_rows" | "success_rows" | "error_rows" | "errors" | "created_by" | "created_at" | "completed_at", ExtArgs["result"]["cSVImport"]>

  export type $CSVImportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CSVImport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      config_slug: string
      config_version: string
      entity_slug: string
      filename: string
      mapping: Prisma.JsonValue
      type_inference: Prisma.JsonValue | null
      status: string
      total_rows: number
      success_rows: number
      error_rows: number
      errors: Prisma.JsonValue | null
      created_by: string | null
      created_at: Date
      completed_at: Date | null
    }, ExtArgs["result"]["cSVImport"]>
    composites: {}
  }

  type CSVImportGetPayload<S extends boolean | null | undefined | CSVImportDefaultArgs> = $Result.GetResult<Prisma.$CSVImportPayload, S>

  type CSVImportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CSVImportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CSVImportCountAggregateInputType | true
    }

  export interface CSVImportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CSVImport'], meta: { name: 'CSVImport' } }
    /**
     * Find zero or one CSVImport that matches the filter.
     * @param {CSVImportFindUniqueArgs} args - Arguments to find a CSVImport
     * @example
     * // Get one CSVImport
     * const cSVImport = await prisma.cSVImport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CSVImportFindUniqueArgs>(args: SelectSubset<T, CSVImportFindUniqueArgs<ExtArgs>>): Prisma__CSVImportClient<$Result.GetResult<Prisma.$CSVImportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CSVImport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CSVImportFindUniqueOrThrowArgs} args - Arguments to find a CSVImport
     * @example
     * // Get one CSVImport
     * const cSVImport = await prisma.cSVImport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CSVImportFindUniqueOrThrowArgs>(args: SelectSubset<T, CSVImportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CSVImportClient<$Result.GetResult<Prisma.$CSVImportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CSVImport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVImportFindFirstArgs} args - Arguments to find a CSVImport
     * @example
     * // Get one CSVImport
     * const cSVImport = await prisma.cSVImport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CSVImportFindFirstArgs>(args?: SelectSubset<T, CSVImportFindFirstArgs<ExtArgs>>): Prisma__CSVImportClient<$Result.GetResult<Prisma.$CSVImportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CSVImport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVImportFindFirstOrThrowArgs} args - Arguments to find a CSVImport
     * @example
     * // Get one CSVImport
     * const cSVImport = await prisma.cSVImport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CSVImportFindFirstOrThrowArgs>(args?: SelectSubset<T, CSVImportFindFirstOrThrowArgs<ExtArgs>>): Prisma__CSVImportClient<$Result.GetResult<Prisma.$CSVImportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CSVImports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVImportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CSVImports
     * const cSVImports = await prisma.cSVImport.findMany()
     * 
     * // Get first 10 CSVImports
     * const cSVImports = await prisma.cSVImport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cSVImportWithIdOnly = await prisma.cSVImport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CSVImportFindManyArgs>(args?: SelectSubset<T, CSVImportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CSVImportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CSVImport.
     * @param {CSVImportCreateArgs} args - Arguments to create a CSVImport.
     * @example
     * // Create one CSVImport
     * const CSVImport = await prisma.cSVImport.create({
     *   data: {
     *     // ... data to create a CSVImport
     *   }
     * })
     * 
     */
    create<T extends CSVImportCreateArgs>(args: SelectSubset<T, CSVImportCreateArgs<ExtArgs>>): Prisma__CSVImportClient<$Result.GetResult<Prisma.$CSVImportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CSVImports.
     * @param {CSVImportCreateManyArgs} args - Arguments to create many CSVImports.
     * @example
     * // Create many CSVImports
     * const cSVImport = await prisma.cSVImport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CSVImportCreateManyArgs>(args?: SelectSubset<T, CSVImportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CSVImports and returns the data saved in the database.
     * @param {CSVImportCreateManyAndReturnArgs} args - Arguments to create many CSVImports.
     * @example
     * // Create many CSVImports
     * const cSVImport = await prisma.cSVImport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CSVImports and only return the `id`
     * const cSVImportWithIdOnly = await prisma.cSVImport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CSVImportCreateManyAndReturnArgs>(args?: SelectSubset<T, CSVImportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CSVImportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CSVImport.
     * @param {CSVImportDeleteArgs} args - Arguments to delete one CSVImport.
     * @example
     * // Delete one CSVImport
     * const CSVImport = await prisma.cSVImport.delete({
     *   where: {
     *     // ... filter to delete one CSVImport
     *   }
     * })
     * 
     */
    delete<T extends CSVImportDeleteArgs>(args: SelectSubset<T, CSVImportDeleteArgs<ExtArgs>>): Prisma__CSVImportClient<$Result.GetResult<Prisma.$CSVImportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CSVImport.
     * @param {CSVImportUpdateArgs} args - Arguments to update one CSVImport.
     * @example
     * // Update one CSVImport
     * const cSVImport = await prisma.cSVImport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CSVImportUpdateArgs>(args: SelectSubset<T, CSVImportUpdateArgs<ExtArgs>>): Prisma__CSVImportClient<$Result.GetResult<Prisma.$CSVImportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CSVImports.
     * @param {CSVImportDeleteManyArgs} args - Arguments to filter CSVImports to delete.
     * @example
     * // Delete a few CSVImports
     * const { count } = await prisma.cSVImport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CSVImportDeleteManyArgs>(args?: SelectSubset<T, CSVImportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CSVImports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVImportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CSVImports
     * const cSVImport = await prisma.cSVImport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CSVImportUpdateManyArgs>(args: SelectSubset<T, CSVImportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CSVImports and returns the data updated in the database.
     * @param {CSVImportUpdateManyAndReturnArgs} args - Arguments to update many CSVImports.
     * @example
     * // Update many CSVImports
     * const cSVImport = await prisma.cSVImport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CSVImports and only return the `id`
     * const cSVImportWithIdOnly = await prisma.cSVImport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CSVImportUpdateManyAndReturnArgs>(args: SelectSubset<T, CSVImportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CSVImportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CSVImport.
     * @param {CSVImportUpsertArgs} args - Arguments to update or create a CSVImport.
     * @example
     * // Update or create a CSVImport
     * const cSVImport = await prisma.cSVImport.upsert({
     *   create: {
     *     // ... data to create a CSVImport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CSVImport we want to update
     *   }
     * })
     */
    upsert<T extends CSVImportUpsertArgs>(args: SelectSubset<T, CSVImportUpsertArgs<ExtArgs>>): Prisma__CSVImportClient<$Result.GetResult<Prisma.$CSVImportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CSVImports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVImportCountArgs} args - Arguments to filter CSVImports to count.
     * @example
     * // Count the number of CSVImports
     * const count = await prisma.cSVImport.count({
     *   where: {
     *     // ... the filter for the CSVImports we want to count
     *   }
     * })
    **/
    count<T extends CSVImportCountArgs>(
      args?: Subset<T, CSVImportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CSVImportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CSVImport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVImportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CSVImportAggregateArgs>(args: Subset<T, CSVImportAggregateArgs>): Prisma.PrismaPromise<GetCSVImportAggregateType<T>>

    /**
     * Group by CSVImport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CSVImportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CSVImportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CSVImportGroupByArgs['orderBy'] }
        : { orderBy?: CSVImportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CSVImportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCSVImportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CSVImport model
   */
  readonly fields: CSVImportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CSVImport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CSVImportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CSVImport model
   */
  interface CSVImportFieldRefs {
    readonly id: FieldRef<"CSVImport", 'String'>
    readonly config_slug: FieldRef<"CSVImport", 'String'>
    readonly config_version: FieldRef<"CSVImport", 'String'>
    readonly entity_slug: FieldRef<"CSVImport", 'String'>
    readonly filename: FieldRef<"CSVImport", 'String'>
    readonly mapping: FieldRef<"CSVImport", 'Json'>
    readonly type_inference: FieldRef<"CSVImport", 'Json'>
    readonly status: FieldRef<"CSVImport", 'String'>
    readonly total_rows: FieldRef<"CSVImport", 'Int'>
    readonly success_rows: FieldRef<"CSVImport", 'Int'>
    readonly error_rows: FieldRef<"CSVImport", 'Int'>
    readonly errors: FieldRef<"CSVImport", 'Json'>
    readonly created_by: FieldRef<"CSVImport", 'String'>
    readonly created_at: FieldRef<"CSVImport", 'DateTime'>
    readonly completed_at: FieldRef<"CSVImport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CSVImport findUnique
   */
  export type CSVImportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
    /**
     * Filter, which CSVImport to fetch.
     */
    where: CSVImportWhereUniqueInput
  }

  /**
   * CSVImport findUniqueOrThrow
   */
  export type CSVImportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
    /**
     * Filter, which CSVImport to fetch.
     */
    where: CSVImportWhereUniqueInput
  }

  /**
   * CSVImport findFirst
   */
  export type CSVImportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
    /**
     * Filter, which CSVImport to fetch.
     */
    where?: CSVImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSVImports to fetch.
     */
    orderBy?: CSVImportOrderByWithRelationInput | CSVImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CSVImports.
     */
    cursor?: CSVImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSVImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSVImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CSVImports.
     */
    distinct?: CSVImportScalarFieldEnum | CSVImportScalarFieldEnum[]
  }

  /**
   * CSVImport findFirstOrThrow
   */
  export type CSVImportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
    /**
     * Filter, which CSVImport to fetch.
     */
    where?: CSVImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSVImports to fetch.
     */
    orderBy?: CSVImportOrderByWithRelationInput | CSVImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CSVImports.
     */
    cursor?: CSVImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSVImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSVImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CSVImports.
     */
    distinct?: CSVImportScalarFieldEnum | CSVImportScalarFieldEnum[]
  }

  /**
   * CSVImport findMany
   */
  export type CSVImportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
    /**
     * Filter, which CSVImports to fetch.
     */
    where?: CSVImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CSVImports to fetch.
     */
    orderBy?: CSVImportOrderByWithRelationInput | CSVImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CSVImports.
     */
    cursor?: CSVImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CSVImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CSVImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CSVImports.
     */
    distinct?: CSVImportScalarFieldEnum | CSVImportScalarFieldEnum[]
  }

  /**
   * CSVImport create
   */
  export type CSVImportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
    /**
     * The data needed to create a CSVImport.
     */
    data: XOR<CSVImportCreateInput, CSVImportUncheckedCreateInput>
  }

  /**
   * CSVImport createMany
   */
  export type CSVImportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CSVImports.
     */
    data: CSVImportCreateManyInput | CSVImportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CSVImport createManyAndReturn
   */
  export type CSVImportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
    /**
     * The data used to create many CSVImports.
     */
    data: CSVImportCreateManyInput | CSVImportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CSVImport update
   */
  export type CSVImportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
    /**
     * The data needed to update a CSVImport.
     */
    data: XOR<CSVImportUpdateInput, CSVImportUncheckedUpdateInput>
    /**
     * Choose, which CSVImport to update.
     */
    where: CSVImportWhereUniqueInput
  }

  /**
   * CSVImport updateMany
   */
  export type CSVImportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CSVImports.
     */
    data: XOR<CSVImportUpdateManyMutationInput, CSVImportUncheckedUpdateManyInput>
    /**
     * Filter which CSVImports to update
     */
    where?: CSVImportWhereInput
    /**
     * Limit how many CSVImports to update.
     */
    limit?: number
  }

  /**
   * CSVImport updateManyAndReturn
   */
  export type CSVImportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
    /**
     * The data used to update CSVImports.
     */
    data: XOR<CSVImportUpdateManyMutationInput, CSVImportUncheckedUpdateManyInput>
    /**
     * Filter which CSVImports to update
     */
    where?: CSVImportWhereInput
    /**
     * Limit how many CSVImports to update.
     */
    limit?: number
  }

  /**
   * CSVImport upsert
   */
  export type CSVImportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
    /**
     * The filter to search for the CSVImport to update in case it exists.
     */
    where: CSVImportWhereUniqueInput
    /**
     * In case the CSVImport found by the `where` argument doesn't exist, create a new CSVImport with this data.
     */
    create: XOR<CSVImportCreateInput, CSVImportUncheckedCreateInput>
    /**
     * In case the CSVImport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CSVImportUpdateInput, CSVImportUncheckedUpdateInput>
  }

  /**
   * CSVImport delete
   */
  export type CSVImportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
    /**
     * Filter which CSVImport to delete.
     */
    where: CSVImportWhereUniqueInput
  }

  /**
   * CSVImport deleteMany
   */
  export type CSVImportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CSVImports to delete
     */
    where?: CSVImportWhereInput
    /**
     * Limit how many CSVImports to delete.
     */
    limit?: number
  }

  /**
   * CSVImport without action
   */
  export type CSVImportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CSVImport
     */
    select?: CSVImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CSVImport
     */
    omit?: CSVImportOmit<ExtArgs> | null
  }


  /**
   * Model ConfigVersion
   */

  export type AggregateConfigVersion = {
    _count: ConfigVersionCountAggregateOutputType | null
    _min: ConfigVersionMinAggregateOutputType | null
    _max: ConfigVersionMaxAggregateOutputType | null
  }

  export type ConfigVersionMinAggregateOutputType = {
    id: string | null
    config_slug: string | null
    version: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type ConfigVersionMaxAggregateOutputType = {
    id: string | null
    config_slug: string | null
    version: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type ConfigVersionCountAggregateOutputType = {
    id: number
    config_slug: number
    version: number
    config: number
    changes: number
    created_by: number
    created_at: number
    _all: number
  }


  export type ConfigVersionMinAggregateInputType = {
    id?: true
    config_slug?: true
    version?: true
    created_by?: true
    created_at?: true
  }

  export type ConfigVersionMaxAggregateInputType = {
    id?: true
    config_slug?: true
    version?: true
    created_by?: true
    created_at?: true
  }

  export type ConfigVersionCountAggregateInputType = {
    id?: true
    config_slug?: true
    version?: true
    config?: true
    changes?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type ConfigVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfigVersion to aggregate.
     */
    where?: ConfigVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfigVersions to fetch.
     */
    orderBy?: ConfigVersionOrderByWithRelationInput | ConfigVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfigVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfigVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfigVersions
    **/
    _count?: true | ConfigVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigVersionMaxAggregateInputType
  }

  export type GetConfigVersionAggregateType<T extends ConfigVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateConfigVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfigVersion[P]>
      : GetScalarType<T[P], AggregateConfigVersion[P]>
  }




  export type ConfigVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigVersionWhereInput
    orderBy?: ConfigVersionOrderByWithAggregationInput | ConfigVersionOrderByWithAggregationInput[]
    by: ConfigVersionScalarFieldEnum[] | ConfigVersionScalarFieldEnum
    having?: ConfigVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigVersionCountAggregateInputType | true
    _min?: ConfigVersionMinAggregateInputType
    _max?: ConfigVersionMaxAggregateInputType
  }

  export type ConfigVersionGroupByOutputType = {
    id: string
    config_slug: string
    version: string
    config: JsonValue
    changes: JsonValue | null
    created_by: string | null
    created_at: Date
    _count: ConfigVersionCountAggregateOutputType | null
    _min: ConfigVersionMinAggregateOutputType | null
    _max: ConfigVersionMaxAggregateOutputType | null
  }

  type GetConfigVersionGroupByPayload<T extends ConfigVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigVersionGroupByOutputType[P]>
        }
      >
    >


  export type ConfigVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config_slug?: boolean
    version?: boolean
    config?: boolean
    changes?: boolean
    created_by?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["configVersion"]>

  export type ConfigVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config_slug?: boolean
    version?: boolean
    config?: boolean
    changes?: boolean
    created_by?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["configVersion"]>

  export type ConfigVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config_slug?: boolean
    version?: boolean
    config?: boolean
    changes?: boolean
    created_by?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["configVersion"]>

  export type ConfigVersionSelectScalar = {
    id?: boolean
    config_slug?: boolean
    version?: boolean
    config?: boolean
    changes?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type ConfigVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "config_slug" | "version" | "config" | "changes" | "created_by" | "created_at", ExtArgs["result"]["configVersion"]>

  export type $ConfigVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfigVersion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      config_slug: string
      version: string
      config: Prisma.JsonValue
      changes: Prisma.JsonValue | null
      created_by: string | null
      created_at: Date
    }, ExtArgs["result"]["configVersion"]>
    composites: {}
  }

  type ConfigVersionGetPayload<S extends boolean | null | undefined | ConfigVersionDefaultArgs> = $Result.GetResult<Prisma.$ConfigVersionPayload, S>

  type ConfigVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigVersionCountAggregateInputType | true
    }

  export interface ConfigVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfigVersion'], meta: { name: 'ConfigVersion' } }
    /**
     * Find zero or one ConfigVersion that matches the filter.
     * @param {ConfigVersionFindUniqueArgs} args - Arguments to find a ConfigVersion
     * @example
     * // Get one ConfigVersion
     * const configVersion = await prisma.configVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigVersionFindUniqueArgs>(args: SelectSubset<T, ConfigVersionFindUniqueArgs<ExtArgs>>): Prisma__ConfigVersionClient<$Result.GetResult<Prisma.$ConfigVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConfigVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigVersionFindUniqueOrThrowArgs} args - Arguments to find a ConfigVersion
     * @example
     * // Get one ConfigVersion
     * const configVersion = await prisma.configVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigVersionClient<$Result.GetResult<Prisma.$ConfigVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfigVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigVersionFindFirstArgs} args - Arguments to find a ConfigVersion
     * @example
     * // Get one ConfigVersion
     * const configVersion = await prisma.configVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigVersionFindFirstArgs>(args?: SelectSubset<T, ConfigVersionFindFirstArgs<ExtArgs>>): Prisma__ConfigVersionClient<$Result.GetResult<Prisma.$ConfigVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfigVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigVersionFindFirstOrThrowArgs} args - Arguments to find a ConfigVersion
     * @example
     * // Get one ConfigVersion
     * const configVersion = await prisma.configVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigVersionClient<$Result.GetResult<Prisma.$ConfigVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConfigVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfigVersions
     * const configVersions = await prisma.configVersion.findMany()
     * 
     * // Get first 10 ConfigVersions
     * const configVersions = await prisma.configVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configVersionWithIdOnly = await prisma.configVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigVersionFindManyArgs>(args?: SelectSubset<T, ConfigVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConfigVersion.
     * @param {ConfigVersionCreateArgs} args - Arguments to create a ConfigVersion.
     * @example
     * // Create one ConfigVersion
     * const ConfigVersion = await prisma.configVersion.create({
     *   data: {
     *     // ... data to create a ConfigVersion
     *   }
     * })
     * 
     */
    create<T extends ConfigVersionCreateArgs>(args: SelectSubset<T, ConfigVersionCreateArgs<ExtArgs>>): Prisma__ConfigVersionClient<$Result.GetResult<Prisma.$ConfigVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConfigVersions.
     * @param {ConfigVersionCreateManyArgs} args - Arguments to create many ConfigVersions.
     * @example
     * // Create many ConfigVersions
     * const configVersion = await prisma.configVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigVersionCreateManyArgs>(args?: SelectSubset<T, ConfigVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConfigVersions and returns the data saved in the database.
     * @param {ConfigVersionCreateManyAndReturnArgs} args - Arguments to create many ConfigVersions.
     * @example
     * // Create many ConfigVersions
     * const configVersion = await prisma.configVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConfigVersions and only return the `id`
     * const configVersionWithIdOnly = await prisma.configVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfigVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfigVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConfigVersion.
     * @param {ConfigVersionDeleteArgs} args - Arguments to delete one ConfigVersion.
     * @example
     * // Delete one ConfigVersion
     * const ConfigVersion = await prisma.configVersion.delete({
     *   where: {
     *     // ... filter to delete one ConfigVersion
     *   }
     * })
     * 
     */
    delete<T extends ConfigVersionDeleteArgs>(args: SelectSubset<T, ConfigVersionDeleteArgs<ExtArgs>>): Prisma__ConfigVersionClient<$Result.GetResult<Prisma.$ConfigVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConfigVersion.
     * @param {ConfigVersionUpdateArgs} args - Arguments to update one ConfigVersion.
     * @example
     * // Update one ConfigVersion
     * const configVersion = await prisma.configVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigVersionUpdateArgs>(args: SelectSubset<T, ConfigVersionUpdateArgs<ExtArgs>>): Prisma__ConfigVersionClient<$Result.GetResult<Prisma.$ConfigVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConfigVersions.
     * @param {ConfigVersionDeleteManyArgs} args - Arguments to filter ConfigVersions to delete.
     * @example
     * // Delete a few ConfigVersions
     * const { count } = await prisma.configVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigVersionDeleteManyArgs>(args?: SelectSubset<T, ConfigVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfigVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfigVersions
     * const configVersion = await prisma.configVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigVersionUpdateManyArgs>(args: SelectSubset<T, ConfigVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfigVersions and returns the data updated in the database.
     * @param {ConfigVersionUpdateManyAndReturnArgs} args - Arguments to update many ConfigVersions.
     * @example
     * // Update many ConfigVersions
     * const configVersion = await prisma.configVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConfigVersions and only return the `id`
     * const configVersionWithIdOnly = await prisma.configVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConfigVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfigVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConfigVersion.
     * @param {ConfigVersionUpsertArgs} args - Arguments to update or create a ConfigVersion.
     * @example
     * // Update or create a ConfigVersion
     * const configVersion = await prisma.configVersion.upsert({
     *   create: {
     *     // ... data to create a ConfigVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfigVersion we want to update
     *   }
     * })
     */
    upsert<T extends ConfigVersionUpsertArgs>(args: SelectSubset<T, ConfigVersionUpsertArgs<ExtArgs>>): Prisma__ConfigVersionClient<$Result.GetResult<Prisma.$ConfigVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConfigVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigVersionCountArgs} args - Arguments to filter ConfigVersions to count.
     * @example
     * // Count the number of ConfigVersions
     * const count = await prisma.configVersion.count({
     *   where: {
     *     // ... the filter for the ConfigVersions we want to count
     *   }
     * })
    **/
    count<T extends ConfigVersionCountArgs>(
      args?: Subset<T, ConfigVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfigVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfigVersionAggregateArgs>(args: Subset<T, ConfigVersionAggregateArgs>): Prisma.PrismaPromise<GetConfigVersionAggregateType<T>>

    /**
     * Group by ConfigVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfigVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigVersionGroupByArgs['orderBy'] }
        : { orderBy?: ConfigVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfigVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfigVersion model
   */
  readonly fields: ConfigVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfigVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConfigVersion model
   */
  interface ConfigVersionFieldRefs {
    readonly id: FieldRef<"ConfigVersion", 'String'>
    readonly config_slug: FieldRef<"ConfigVersion", 'String'>
    readonly version: FieldRef<"ConfigVersion", 'String'>
    readonly config: FieldRef<"ConfigVersion", 'Json'>
    readonly changes: FieldRef<"ConfigVersion", 'Json'>
    readonly created_by: FieldRef<"ConfigVersion", 'String'>
    readonly created_at: FieldRef<"ConfigVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConfigVersion findUnique
   */
  export type ConfigVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
    /**
     * Filter, which ConfigVersion to fetch.
     */
    where: ConfigVersionWhereUniqueInput
  }

  /**
   * ConfigVersion findUniqueOrThrow
   */
  export type ConfigVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
    /**
     * Filter, which ConfigVersion to fetch.
     */
    where: ConfigVersionWhereUniqueInput
  }

  /**
   * ConfigVersion findFirst
   */
  export type ConfigVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
    /**
     * Filter, which ConfigVersion to fetch.
     */
    where?: ConfigVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfigVersions to fetch.
     */
    orderBy?: ConfigVersionOrderByWithRelationInput | ConfigVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfigVersions.
     */
    cursor?: ConfigVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfigVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfigVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfigVersions.
     */
    distinct?: ConfigVersionScalarFieldEnum | ConfigVersionScalarFieldEnum[]
  }

  /**
   * ConfigVersion findFirstOrThrow
   */
  export type ConfigVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
    /**
     * Filter, which ConfigVersion to fetch.
     */
    where?: ConfigVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfigVersions to fetch.
     */
    orderBy?: ConfigVersionOrderByWithRelationInput | ConfigVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfigVersions.
     */
    cursor?: ConfigVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfigVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfigVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfigVersions.
     */
    distinct?: ConfigVersionScalarFieldEnum | ConfigVersionScalarFieldEnum[]
  }

  /**
   * ConfigVersion findMany
   */
  export type ConfigVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
    /**
     * Filter, which ConfigVersions to fetch.
     */
    where?: ConfigVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfigVersions to fetch.
     */
    orderBy?: ConfigVersionOrderByWithRelationInput | ConfigVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfigVersions.
     */
    cursor?: ConfigVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfigVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfigVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfigVersions.
     */
    distinct?: ConfigVersionScalarFieldEnum | ConfigVersionScalarFieldEnum[]
  }

  /**
   * ConfigVersion create
   */
  export type ConfigVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
    /**
     * The data needed to create a ConfigVersion.
     */
    data: XOR<ConfigVersionCreateInput, ConfigVersionUncheckedCreateInput>
  }

  /**
   * ConfigVersion createMany
   */
  export type ConfigVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfigVersions.
     */
    data: ConfigVersionCreateManyInput | ConfigVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfigVersion createManyAndReturn
   */
  export type ConfigVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
    /**
     * The data used to create many ConfigVersions.
     */
    data: ConfigVersionCreateManyInput | ConfigVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfigVersion update
   */
  export type ConfigVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
    /**
     * The data needed to update a ConfigVersion.
     */
    data: XOR<ConfigVersionUpdateInput, ConfigVersionUncheckedUpdateInput>
    /**
     * Choose, which ConfigVersion to update.
     */
    where: ConfigVersionWhereUniqueInput
  }

  /**
   * ConfigVersion updateMany
   */
  export type ConfigVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfigVersions.
     */
    data: XOR<ConfigVersionUpdateManyMutationInput, ConfigVersionUncheckedUpdateManyInput>
    /**
     * Filter which ConfigVersions to update
     */
    where?: ConfigVersionWhereInput
    /**
     * Limit how many ConfigVersions to update.
     */
    limit?: number
  }

  /**
   * ConfigVersion updateManyAndReturn
   */
  export type ConfigVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
    /**
     * The data used to update ConfigVersions.
     */
    data: XOR<ConfigVersionUpdateManyMutationInput, ConfigVersionUncheckedUpdateManyInput>
    /**
     * Filter which ConfigVersions to update
     */
    where?: ConfigVersionWhereInput
    /**
     * Limit how many ConfigVersions to update.
     */
    limit?: number
  }

  /**
   * ConfigVersion upsert
   */
  export type ConfigVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
    /**
     * The filter to search for the ConfigVersion to update in case it exists.
     */
    where: ConfigVersionWhereUniqueInput
    /**
     * In case the ConfigVersion found by the `where` argument doesn't exist, create a new ConfigVersion with this data.
     */
    create: XOR<ConfigVersionCreateInput, ConfigVersionUncheckedCreateInput>
    /**
     * In case the ConfigVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigVersionUpdateInput, ConfigVersionUncheckedUpdateInput>
  }

  /**
   * ConfigVersion delete
   */
  export type ConfigVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
    /**
     * Filter which ConfigVersion to delete.
     */
    where: ConfigVersionWhereUniqueInput
  }

  /**
   * ConfigVersion deleteMany
   */
  export type ConfigVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfigVersions to delete
     */
    where?: ConfigVersionWhereInput
    /**
     * Limit how many ConfigVersions to delete.
     */
    limit?: number
  }

  /**
   * ConfigVersion without action
   */
  export type ConfigVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigVersion
     */
    select?: ConfigVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfigVersion
     */
    omit?: ConfigVersionOmit<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    user_id: string
    token: string
    expires_at: Date
    created_at: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token" | "expires_at" | "created_at", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      token: string
      expires_at: Date
      created_at: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly user_id: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expires_at: FieldRef<"Session", 'DateTime'>
    readonly created_at: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    type: string | null
    title: string | null
    message: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    type: string | null
    title: string | null
    message: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    user_id: number
    type: number
    title: number
    message: number
    data: number
    is_read: number
    created_at: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    title?: true
    message?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    title?: true
    message?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    title?: true
    message?: true
    data?: true
    is_read?: true
    created_at?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    user_id: string
    type: string
    title: string
    message: string
    data: JsonValue | null
    is_read: boolean
    created_at: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    is_read?: boolean
    created_at?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "type" | "title" | "message" | "data" | "is_read" | "created_at", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      type: string
      title: string
      message: string
      data: Prisma.JsonValue | null
      is_read: boolean
      created_at: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly user_id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly data: FieldRef<"Notification", 'Json'>
    readonly is_read: FieldRef<"Notification", 'Boolean'>
    readonly created_at: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    version: 'version',
    config: 'config',
    is_active: 'is_active',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    previous_version_id: 'previous_version_id'
  };

  export type AppConfigScalarFieldEnum = (typeof AppConfigScalarFieldEnum)[keyof typeof AppConfigScalarFieldEnum]


  export const AppDataScalarFieldEnum: {
    id: 'id',
    config_slug: 'config_slug',
    config_version: 'config_version',
    entity_slug: 'entity_slug',
    owner_id: 'owner_id',
    payload: 'payload',
    version: 'version',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AppDataScalarFieldEnum = (typeof AppDataScalarFieldEnum)[keyof typeof AppDataScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    avatar: 'avatar',
    preferences: 'preferences',
    last_login: 'last_login',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventLogScalarFieldEnum: {
    id: 'id',
    event_type: 'event_type',
    source: 'source',
    user_id: 'user_id',
    config_slug: 'config_slug',
    entity_slug: 'entity_slug',
    data: 'data',
    severity: 'severity',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    created_at: 'created_at'
  };

  export type EventLogScalarFieldEnum = (typeof EventLogScalarFieldEnum)[keyof typeof EventLogScalarFieldEnum]


  export const CSVImportScalarFieldEnum: {
    id: 'id',
    config_slug: 'config_slug',
    config_version: 'config_version',
    entity_slug: 'entity_slug',
    filename: 'filename',
    mapping: 'mapping',
    type_inference: 'type_inference',
    status: 'status',
    total_rows: 'total_rows',
    success_rows: 'success_rows',
    error_rows: 'error_rows',
    errors: 'errors',
    created_by: 'created_by',
    created_at: 'created_at',
    completed_at: 'completed_at'
  };

  export type CSVImportScalarFieldEnum = (typeof CSVImportScalarFieldEnum)[keyof typeof CSVImportScalarFieldEnum]


  export const ConfigVersionScalarFieldEnum: {
    id: 'id',
    config_slug: 'config_slug',
    version: 'version',
    config: 'config',
    changes: 'changes',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type ConfigVersionScalarFieldEnum = (typeof ConfigVersionScalarFieldEnum)[keyof typeof ConfigVersionScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    type: 'type',
    title: 'title',
    message: 'message',
    data: 'data',
    is_read: 'is_read',
    created_at: 'created_at'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AppConfigWhereInput = {
    AND?: AppConfigWhereInput | AppConfigWhereInput[]
    OR?: AppConfigWhereInput[]
    NOT?: AppConfigWhereInput | AppConfigWhereInput[]
    id?: StringFilter<"AppConfig"> | string
    name?: StringFilter<"AppConfig"> | string
    slug?: StringFilter<"AppConfig"> | string
    description?: StringNullableFilter<"AppConfig"> | string | null
    version?: StringFilter<"AppConfig"> | string
    config?: JsonFilter<"AppConfig">
    is_active?: BoolFilter<"AppConfig"> | boolean
    created_by?: StringNullableFilter<"AppConfig"> | string | null
    created_at?: DateTimeFilter<"AppConfig"> | Date | string
    updated_at?: DateTimeFilter<"AppConfig"> | Date | string
    previous_version_id?: StringNullableFilter<"AppConfig"> | string | null
  }

  export type AppConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrder
    config?: SortOrder
    is_active?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    previous_version_id?: SortOrderInput | SortOrder
  }

  export type AppConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    slug_version?: AppConfigSlugVersionCompoundUniqueInput
    AND?: AppConfigWhereInput | AppConfigWhereInput[]
    OR?: AppConfigWhereInput[]
    NOT?: AppConfigWhereInput | AppConfigWhereInput[]
    name?: StringFilter<"AppConfig"> | string
    description?: StringNullableFilter<"AppConfig"> | string | null
    version?: StringFilter<"AppConfig"> | string
    config?: JsonFilter<"AppConfig">
    is_active?: BoolFilter<"AppConfig"> | boolean
    created_by?: StringNullableFilter<"AppConfig"> | string | null
    created_at?: DateTimeFilter<"AppConfig"> | Date | string
    updated_at?: DateTimeFilter<"AppConfig"> | Date | string
    previous_version_id?: StringNullableFilter<"AppConfig"> | string | null
  }, "id" | "slug" | "slug_version">

  export type AppConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrder
    config?: SortOrder
    is_active?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    previous_version_id?: SortOrderInput | SortOrder
    _count?: AppConfigCountOrderByAggregateInput
    _max?: AppConfigMaxOrderByAggregateInput
    _min?: AppConfigMinOrderByAggregateInput
  }

  export type AppConfigScalarWhereWithAggregatesInput = {
    AND?: AppConfigScalarWhereWithAggregatesInput | AppConfigScalarWhereWithAggregatesInput[]
    OR?: AppConfigScalarWhereWithAggregatesInput[]
    NOT?: AppConfigScalarWhereWithAggregatesInput | AppConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppConfig"> | string
    name?: StringWithAggregatesFilter<"AppConfig"> | string
    slug?: StringWithAggregatesFilter<"AppConfig"> | string
    description?: StringNullableWithAggregatesFilter<"AppConfig"> | string | null
    version?: StringWithAggregatesFilter<"AppConfig"> | string
    config?: JsonWithAggregatesFilter<"AppConfig">
    is_active?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    created_by?: StringNullableWithAggregatesFilter<"AppConfig"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"AppConfig"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AppConfig"> | Date | string
    previous_version_id?: StringNullableWithAggregatesFilter<"AppConfig"> | string | null
  }

  export type AppDataWhereInput = {
    AND?: AppDataWhereInput | AppDataWhereInput[]
    OR?: AppDataWhereInput[]
    NOT?: AppDataWhereInput | AppDataWhereInput[]
    id?: StringFilter<"AppData"> | string
    config_slug?: StringFilter<"AppData"> | string
    config_version?: StringFilter<"AppData"> | string
    entity_slug?: StringFilter<"AppData"> | string
    owner_id?: StringNullableFilter<"AppData"> | string | null
    payload?: JsonFilter<"AppData">
    version?: IntFilter<"AppData"> | number
    created_at?: DateTimeFilter<"AppData"> | Date | string
    updated_at?: DateTimeFilter<"AppData"> | Date | string
  }

  export type AppDataOrderByWithRelationInput = {
    id?: SortOrder
    config_slug?: SortOrder
    config_version?: SortOrder
    entity_slug?: SortOrder
    owner_id?: SortOrderInput | SortOrder
    payload?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppDataWhereInput | AppDataWhereInput[]
    OR?: AppDataWhereInput[]
    NOT?: AppDataWhereInput | AppDataWhereInput[]
    config_slug?: StringFilter<"AppData"> | string
    config_version?: StringFilter<"AppData"> | string
    entity_slug?: StringFilter<"AppData"> | string
    owner_id?: StringNullableFilter<"AppData"> | string | null
    payload?: JsonFilter<"AppData">
    version?: IntFilter<"AppData"> | number
    created_at?: DateTimeFilter<"AppData"> | Date | string
    updated_at?: DateTimeFilter<"AppData"> | Date | string
  }, "id">

  export type AppDataOrderByWithAggregationInput = {
    id?: SortOrder
    config_slug?: SortOrder
    config_version?: SortOrder
    entity_slug?: SortOrder
    owner_id?: SortOrderInput | SortOrder
    payload?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AppDataCountOrderByAggregateInput
    _avg?: AppDataAvgOrderByAggregateInput
    _max?: AppDataMaxOrderByAggregateInput
    _min?: AppDataMinOrderByAggregateInput
    _sum?: AppDataSumOrderByAggregateInput
  }

  export type AppDataScalarWhereWithAggregatesInput = {
    AND?: AppDataScalarWhereWithAggregatesInput | AppDataScalarWhereWithAggregatesInput[]
    OR?: AppDataScalarWhereWithAggregatesInput[]
    NOT?: AppDataScalarWhereWithAggregatesInput | AppDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppData"> | string
    config_slug?: StringWithAggregatesFilter<"AppData"> | string
    config_version?: StringWithAggregatesFilter<"AppData"> | string
    entity_slug?: StringWithAggregatesFilter<"AppData"> | string
    owner_id?: StringNullableWithAggregatesFilter<"AppData"> | string | null
    payload?: JsonWithAggregatesFilter<"AppData">
    version?: IntWithAggregatesFilter<"AppData"> | number
    created_at?: DateTimeWithAggregatesFilter<"AppData"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AppData"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    preferences?: JsonNullableFilter<"User">
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    preferences?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    preferences?: JsonNullableFilter<"User">
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    preferences?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    preferences?: JsonNullableWithAggregatesFilter<"User">
    last_login?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventLogWhereInput = {
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    id?: StringFilter<"EventLog"> | string
    event_type?: StringFilter<"EventLog"> | string
    source?: StringFilter<"EventLog"> | string
    user_id?: StringNullableFilter<"EventLog"> | string | null
    config_slug?: StringNullableFilter<"EventLog"> | string | null
    entity_slug?: StringNullableFilter<"EventLog"> | string | null
    data?: JsonNullableFilter<"EventLog">
    severity?: StringFilter<"EventLog"> | string
    ip_address?: StringNullableFilter<"EventLog"> | string | null
    user_agent?: StringNullableFilter<"EventLog"> | string | null
    created_at?: DateTimeFilter<"EventLog"> | Date | string
  }

  export type EventLogOrderByWithRelationInput = {
    id?: SortOrder
    event_type?: SortOrder
    source?: SortOrder
    user_id?: SortOrderInput | SortOrder
    config_slug?: SortOrderInput | SortOrder
    entity_slug?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    severity?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type EventLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    event_type?: StringFilter<"EventLog"> | string
    source?: StringFilter<"EventLog"> | string
    user_id?: StringNullableFilter<"EventLog"> | string | null
    config_slug?: StringNullableFilter<"EventLog"> | string | null
    entity_slug?: StringNullableFilter<"EventLog"> | string | null
    data?: JsonNullableFilter<"EventLog">
    severity?: StringFilter<"EventLog"> | string
    ip_address?: StringNullableFilter<"EventLog"> | string | null
    user_agent?: StringNullableFilter<"EventLog"> | string | null
    created_at?: DateTimeFilter<"EventLog"> | Date | string
  }, "id">

  export type EventLogOrderByWithAggregationInput = {
    id?: SortOrder
    event_type?: SortOrder
    source?: SortOrder
    user_id?: SortOrderInput | SortOrder
    config_slug?: SortOrderInput | SortOrder
    entity_slug?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    severity?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: EventLogCountOrderByAggregateInput
    _max?: EventLogMaxOrderByAggregateInput
    _min?: EventLogMinOrderByAggregateInput
  }

  export type EventLogScalarWhereWithAggregatesInput = {
    AND?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    OR?: EventLogScalarWhereWithAggregatesInput[]
    NOT?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventLog"> | string
    event_type?: StringWithAggregatesFilter<"EventLog"> | string
    source?: StringWithAggregatesFilter<"EventLog"> | string
    user_id?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    config_slug?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    entity_slug?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    data?: JsonNullableWithAggregatesFilter<"EventLog">
    severity?: StringWithAggregatesFilter<"EventLog"> | string
    ip_address?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"EventLog"> | Date | string
  }

  export type CSVImportWhereInput = {
    AND?: CSVImportWhereInput | CSVImportWhereInput[]
    OR?: CSVImportWhereInput[]
    NOT?: CSVImportWhereInput | CSVImportWhereInput[]
    id?: StringFilter<"CSVImport"> | string
    config_slug?: StringFilter<"CSVImport"> | string
    config_version?: StringFilter<"CSVImport"> | string
    entity_slug?: StringFilter<"CSVImport"> | string
    filename?: StringFilter<"CSVImport"> | string
    mapping?: JsonFilter<"CSVImport">
    type_inference?: JsonNullableFilter<"CSVImport">
    status?: StringFilter<"CSVImport"> | string
    total_rows?: IntFilter<"CSVImport"> | number
    success_rows?: IntFilter<"CSVImport"> | number
    error_rows?: IntFilter<"CSVImport"> | number
    errors?: JsonNullableFilter<"CSVImport">
    created_by?: StringNullableFilter<"CSVImport"> | string | null
    created_at?: DateTimeFilter<"CSVImport"> | Date | string
    completed_at?: DateTimeNullableFilter<"CSVImport"> | Date | string | null
  }

  export type CSVImportOrderByWithRelationInput = {
    id?: SortOrder
    config_slug?: SortOrder
    config_version?: SortOrder
    entity_slug?: SortOrder
    filename?: SortOrder
    mapping?: SortOrder
    type_inference?: SortOrderInput | SortOrder
    status?: SortOrder
    total_rows?: SortOrder
    success_rows?: SortOrder
    error_rows?: SortOrder
    errors?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
  }

  export type CSVImportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CSVImportWhereInput | CSVImportWhereInput[]
    OR?: CSVImportWhereInput[]
    NOT?: CSVImportWhereInput | CSVImportWhereInput[]
    config_slug?: StringFilter<"CSVImport"> | string
    config_version?: StringFilter<"CSVImport"> | string
    entity_slug?: StringFilter<"CSVImport"> | string
    filename?: StringFilter<"CSVImport"> | string
    mapping?: JsonFilter<"CSVImport">
    type_inference?: JsonNullableFilter<"CSVImport">
    status?: StringFilter<"CSVImport"> | string
    total_rows?: IntFilter<"CSVImport"> | number
    success_rows?: IntFilter<"CSVImport"> | number
    error_rows?: IntFilter<"CSVImport"> | number
    errors?: JsonNullableFilter<"CSVImport">
    created_by?: StringNullableFilter<"CSVImport"> | string | null
    created_at?: DateTimeFilter<"CSVImport"> | Date | string
    completed_at?: DateTimeNullableFilter<"CSVImport"> | Date | string | null
  }, "id">

  export type CSVImportOrderByWithAggregationInput = {
    id?: SortOrder
    config_slug?: SortOrder
    config_version?: SortOrder
    entity_slug?: SortOrder
    filename?: SortOrder
    mapping?: SortOrder
    type_inference?: SortOrderInput | SortOrder
    status?: SortOrder
    total_rows?: SortOrder
    success_rows?: SortOrder
    error_rows?: SortOrder
    errors?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    _count?: CSVImportCountOrderByAggregateInput
    _avg?: CSVImportAvgOrderByAggregateInput
    _max?: CSVImportMaxOrderByAggregateInput
    _min?: CSVImportMinOrderByAggregateInput
    _sum?: CSVImportSumOrderByAggregateInput
  }

  export type CSVImportScalarWhereWithAggregatesInput = {
    AND?: CSVImportScalarWhereWithAggregatesInput | CSVImportScalarWhereWithAggregatesInput[]
    OR?: CSVImportScalarWhereWithAggregatesInput[]
    NOT?: CSVImportScalarWhereWithAggregatesInput | CSVImportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CSVImport"> | string
    config_slug?: StringWithAggregatesFilter<"CSVImport"> | string
    config_version?: StringWithAggregatesFilter<"CSVImport"> | string
    entity_slug?: StringWithAggregatesFilter<"CSVImport"> | string
    filename?: StringWithAggregatesFilter<"CSVImport"> | string
    mapping?: JsonWithAggregatesFilter<"CSVImport">
    type_inference?: JsonNullableWithAggregatesFilter<"CSVImport">
    status?: StringWithAggregatesFilter<"CSVImport"> | string
    total_rows?: IntWithAggregatesFilter<"CSVImport"> | number
    success_rows?: IntWithAggregatesFilter<"CSVImport"> | number
    error_rows?: IntWithAggregatesFilter<"CSVImport"> | number
    errors?: JsonNullableWithAggregatesFilter<"CSVImport">
    created_by?: StringNullableWithAggregatesFilter<"CSVImport"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"CSVImport"> | Date | string
    completed_at?: DateTimeNullableWithAggregatesFilter<"CSVImport"> | Date | string | null
  }

  export type ConfigVersionWhereInput = {
    AND?: ConfigVersionWhereInput | ConfigVersionWhereInput[]
    OR?: ConfigVersionWhereInput[]
    NOT?: ConfigVersionWhereInput | ConfigVersionWhereInput[]
    id?: StringFilter<"ConfigVersion"> | string
    config_slug?: StringFilter<"ConfigVersion"> | string
    version?: StringFilter<"ConfigVersion"> | string
    config?: JsonFilter<"ConfigVersion">
    changes?: JsonNullableFilter<"ConfigVersion">
    created_by?: StringNullableFilter<"ConfigVersion"> | string | null
    created_at?: DateTimeFilter<"ConfigVersion"> | Date | string
  }

  export type ConfigVersionOrderByWithRelationInput = {
    id?: SortOrder
    config_slug?: SortOrder
    version?: SortOrder
    config?: SortOrder
    changes?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type ConfigVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    config_slug_version?: ConfigVersionConfig_slugVersionCompoundUniqueInput
    AND?: ConfigVersionWhereInput | ConfigVersionWhereInput[]
    OR?: ConfigVersionWhereInput[]
    NOT?: ConfigVersionWhereInput | ConfigVersionWhereInput[]
    config_slug?: StringFilter<"ConfigVersion"> | string
    version?: StringFilter<"ConfigVersion"> | string
    config?: JsonFilter<"ConfigVersion">
    changes?: JsonNullableFilter<"ConfigVersion">
    created_by?: StringNullableFilter<"ConfigVersion"> | string | null
    created_at?: DateTimeFilter<"ConfigVersion"> | Date | string
  }, "id" | "config_slug_version">

  export type ConfigVersionOrderByWithAggregationInput = {
    id?: SortOrder
    config_slug?: SortOrder
    version?: SortOrder
    config?: SortOrder
    changes?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ConfigVersionCountOrderByAggregateInput
    _max?: ConfigVersionMaxOrderByAggregateInput
    _min?: ConfigVersionMinOrderByAggregateInput
  }

  export type ConfigVersionScalarWhereWithAggregatesInput = {
    AND?: ConfigVersionScalarWhereWithAggregatesInput | ConfigVersionScalarWhereWithAggregatesInput[]
    OR?: ConfigVersionScalarWhereWithAggregatesInput[]
    NOT?: ConfigVersionScalarWhereWithAggregatesInput | ConfigVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConfigVersion"> | string
    config_slug?: StringWithAggregatesFilter<"ConfigVersion"> | string
    version?: StringWithAggregatesFilter<"ConfigVersion"> | string
    config?: JsonWithAggregatesFilter<"ConfigVersion">
    changes?: JsonNullableWithAggregatesFilter<"ConfigVersion">
    created_by?: StringNullableWithAggregatesFilter<"ConfigVersion"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ConfigVersion"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    user_id?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expires_at?: DateTimeFilter<"Session"> | Date | string
    created_at?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    user_id?: StringFilter<"Session"> | string
    expires_at?: DateTimeFilter<"Session"> | Date | string
    created_at?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    user_id?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expires_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    user_id?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    is_read?: BoolFilter<"Notification"> | boolean
    created_at?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrderInput | SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    user_id?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    is_read?: BoolFilter<"Notification"> | boolean
    created_at?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrderInput | SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    user_id?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    data?: JsonNullableWithAggregatesFilter<"Notification">
    is_read?: BoolWithAggregatesFilter<"Notification"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type AppConfigCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    version: string
    config: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_by?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    previous_version_id?: string | null
  }

  export type AppConfigUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    version: string
    config: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_by?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    previous_version_id?: string | null
  }

  export type AppConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    previous_version_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    previous_version_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppConfigCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    version: string
    config: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_by?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    previous_version_id?: string | null
  }

  export type AppConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    previous_version_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    previous_version_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppDataCreateInput = {
    id?: string
    config_slug: string
    config_version: string
    entity_slug: string
    owner_id?: string | null
    payload: JsonNullValueInput | InputJsonValue
    version?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppDataUncheckedCreateInput = {
    id?: string
    config_slug: string
    config_version: string
    entity_slug: string
    owner_id?: string | null
    payload: JsonNullValueInput | InputJsonValue
    version?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    config_version?: StringFieldUpdateOperationsInput | string
    entity_slug?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    config_version?: StringFieldUpdateOperationsInput | string
    entity_slug?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppDataCreateManyInput = {
    id?: string
    config_slug: string
    config_version: string
    entity_slug: string
    owner_id?: string | null
    payload: JsonNullValueInput | InputJsonValue
    version?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    config_version?: StringFieldUpdateOperationsInput | string
    entity_slug?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    config_version?: StringFieldUpdateOperationsInput | string
    entity_slug?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    avatar?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    avatar?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    avatar?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogCreateInput = {
    id?: string
    event_type: string
    source: string
    user_id?: string | null
    config_slug?: string | null
    entity_slug?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    severity?: string
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type EventLogUncheckedCreateInput = {
    id?: string
    event_type: string
    source: string
    user_id?: string | null
    config_slug?: string | null
    entity_slug?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    severity?: string
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type EventLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    config_slug?: NullableStringFieldUpdateOperationsInput | string | null
    entity_slug?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    config_slug?: NullableStringFieldUpdateOperationsInput | string | null
    entity_slug?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogCreateManyInput = {
    id?: string
    event_type: string
    source: string
    user_id?: string | null
    config_slug?: string | null
    entity_slug?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    severity?: string
    ip_address?: string | null
    user_agent?: string | null
    created_at?: Date | string
  }

  export type EventLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    config_slug?: NullableStringFieldUpdateOperationsInput | string | null
    entity_slug?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    config_slug?: NullableStringFieldUpdateOperationsInput | string | null
    entity_slug?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CSVImportCreateInput = {
    id?: string
    config_slug: string
    config_version: string
    entity_slug: string
    filename: string
    mapping: JsonNullValueInput | InputJsonValue
    type_inference?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    total_rows: number
    success_rows: number
    error_rows: number
    errors?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type CSVImportUncheckedCreateInput = {
    id?: string
    config_slug: string
    config_version: string
    entity_slug: string
    filename: string
    mapping: JsonNullValueInput | InputJsonValue
    type_inference?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    total_rows: number
    success_rows: number
    error_rows: number
    errors?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type CSVImportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    config_version?: StringFieldUpdateOperationsInput | string
    entity_slug?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    type_inference?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    total_rows?: IntFieldUpdateOperationsInput | number
    success_rows?: IntFieldUpdateOperationsInput | number
    error_rows?: IntFieldUpdateOperationsInput | number
    errors?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CSVImportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    config_version?: StringFieldUpdateOperationsInput | string
    entity_slug?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    type_inference?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    total_rows?: IntFieldUpdateOperationsInput | number
    success_rows?: IntFieldUpdateOperationsInput | number
    error_rows?: IntFieldUpdateOperationsInput | number
    errors?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CSVImportCreateManyInput = {
    id?: string
    config_slug: string
    config_version: string
    entity_slug: string
    filename: string
    mapping: JsonNullValueInput | InputJsonValue
    type_inference?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    total_rows: number
    success_rows: number
    error_rows: number
    errors?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type CSVImportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    config_version?: StringFieldUpdateOperationsInput | string
    entity_slug?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    type_inference?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    total_rows?: IntFieldUpdateOperationsInput | number
    success_rows?: IntFieldUpdateOperationsInput | number
    error_rows?: IntFieldUpdateOperationsInput | number
    errors?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CSVImportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    config_version?: StringFieldUpdateOperationsInput | string
    entity_slug?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mapping?: JsonNullValueInput | InputJsonValue
    type_inference?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    total_rows?: IntFieldUpdateOperationsInput | number
    success_rows?: IntFieldUpdateOperationsInput | number
    error_rows?: IntFieldUpdateOperationsInput | number
    errors?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConfigVersionCreateInput = {
    id?: string
    config_slug: string
    version: string
    config: JsonNullValueInput | InputJsonValue
    changes?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    created_at?: Date | string
  }

  export type ConfigVersionUncheckedCreateInput = {
    id?: string
    config_slug: string
    version: string
    config: JsonNullValueInput | InputJsonValue
    changes?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    created_at?: Date | string
  }

  export type ConfigVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    changes?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    changes?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigVersionCreateManyInput = {
    id?: string
    config_slug: string
    version: string
    config: JsonNullValueInput | InputJsonValue
    changes?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    created_at?: Date | string
  }

  export type ConfigVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    changes?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    changes?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    user_id: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    user_id: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    user_id: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    user_id: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    is_read?: boolean
    created_at?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    user_id: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    is_read?: boolean
    created_at?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    user_id: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    is_read?: boolean
    created_at?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppConfigSlugVersionCompoundUniqueInput = {
    slug: string
    version: string
  }

  export type AppConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    version?: SortOrder
    config?: SortOrder
    is_active?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    previous_version_id?: SortOrder
  }

  export type AppConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    version?: SortOrder
    is_active?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    previous_version_id?: SortOrder
  }

  export type AppConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    version?: SortOrder
    is_active?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    previous_version_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AppDataCountOrderByAggregateInput = {
    id?: SortOrder
    config_slug?: SortOrder
    config_version?: SortOrder
    entity_slug?: SortOrder
    owner_id?: SortOrder
    payload?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppDataAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type AppDataMaxOrderByAggregateInput = {
    id?: SortOrder
    config_slug?: SortOrder
    config_version?: SortOrder
    entity_slug?: SortOrder
    owner_id?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppDataMinOrderByAggregateInput = {
    id?: SortOrder
    config_slug?: SortOrder
    config_version?: SortOrder
    entity_slug?: SortOrder
    owner_id?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppDataSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    preferences?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventLogCountOrderByAggregateInput = {
    id?: SortOrder
    event_type?: SortOrder
    source?: SortOrder
    user_id?: SortOrder
    config_slug?: SortOrder
    entity_slug?: SortOrder
    data?: SortOrder
    severity?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type EventLogMaxOrderByAggregateInput = {
    id?: SortOrder
    event_type?: SortOrder
    source?: SortOrder
    user_id?: SortOrder
    config_slug?: SortOrder
    entity_slug?: SortOrder
    severity?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type EventLogMinOrderByAggregateInput = {
    id?: SortOrder
    event_type?: SortOrder
    source?: SortOrder
    user_id?: SortOrder
    config_slug?: SortOrder
    entity_slug?: SortOrder
    severity?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type CSVImportCountOrderByAggregateInput = {
    id?: SortOrder
    config_slug?: SortOrder
    config_version?: SortOrder
    entity_slug?: SortOrder
    filename?: SortOrder
    mapping?: SortOrder
    type_inference?: SortOrder
    status?: SortOrder
    total_rows?: SortOrder
    success_rows?: SortOrder
    error_rows?: SortOrder
    errors?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type CSVImportAvgOrderByAggregateInput = {
    total_rows?: SortOrder
    success_rows?: SortOrder
    error_rows?: SortOrder
  }

  export type CSVImportMaxOrderByAggregateInput = {
    id?: SortOrder
    config_slug?: SortOrder
    config_version?: SortOrder
    entity_slug?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    total_rows?: SortOrder
    success_rows?: SortOrder
    error_rows?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type CSVImportMinOrderByAggregateInput = {
    id?: SortOrder
    config_slug?: SortOrder
    config_version?: SortOrder
    entity_slug?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    total_rows?: SortOrder
    success_rows?: SortOrder
    error_rows?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type CSVImportSumOrderByAggregateInput = {
    total_rows?: SortOrder
    success_rows?: SortOrder
    error_rows?: SortOrder
  }

  export type ConfigVersionConfig_slugVersionCompoundUniqueInput = {
    config_slug: string
    version: string
  }

  export type ConfigVersionCountOrderByAggregateInput = {
    id?: SortOrder
    config_slug?: SortOrder
    version?: SortOrder
    config?: SortOrder
    changes?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type ConfigVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    config_slug?: SortOrder
    version?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type ConfigVersionMinOrderByAggregateInput = {
    id?: SortOrder
    config_slug?: SortOrder
    version?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}