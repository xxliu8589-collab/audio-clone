
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AudioTemplate
 * 
 */
export type AudioTemplate = $Result.DefaultSelection<Prisma.$AudioTemplatePayload>
/**
 * Model AudioHistory
 * 
 */
export type AudioHistory = $Result.DefaultSelection<Prisma.$AudioHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AudioTemplates
 * const audioTemplates = await prisma.audioTemplate.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AudioTemplates
   * const audioTemplates = await prisma.audioTemplate.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.audioTemplate`: Exposes CRUD operations for the **AudioTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioTemplates
    * const audioTemplates = await prisma.audioTemplate.findMany()
    * ```
    */
  get audioTemplate(): Prisma.AudioTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audioHistory`: Exposes CRUD operations for the **AudioHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioHistories
    * const audioHistories = await prisma.audioHistory.findMany()
    * ```
    */
  get audioHistory(): Prisma.AudioHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    AudioTemplate: 'AudioTemplate',
    AudioHistory: 'AudioHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "audioTemplate" | "audioHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AudioTemplate: {
        payload: Prisma.$AudioTemplatePayload<ExtArgs>
        fields: Prisma.AudioTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioTemplatePayload>
          }
          findFirst: {
            args: Prisma.AudioTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioTemplatePayload>
          }
          findMany: {
            args: Prisma.AudioTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioTemplatePayload>[]
          }
          create: {
            args: Prisma.AudioTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioTemplatePayload>
          }
          createMany: {
            args: Prisma.AudioTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudioTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioTemplatePayload>[]
          }
          delete: {
            args: Prisma.AudioTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioTemplatePayload>
          }
          update: {
            args: Prisma.AudioTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioTemplatePayload>
          }
          deleteMany: {
            args: Prisma.AudioTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AudioTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioTemplatePayload>[]
          }
          upsert: {
            args: Prisma.AudioTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioTemplatePayload>
          }
          aggregate: {
            args: Prisma.AudioTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioTemplate>
          }
          groupBy: {
            args: Prisma.AudioTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudioTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<AudioTemplateCountAggregateOutputType> | number
          }
        }
      }
      AudioHistory: {
        payload: Prisma.$AudioHistoryPayload<ExtArgs>
        fields: Prisma.AudioHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioHistoryPayload>
          }
          findFirst: {
            args: Prisma.AudioHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioHistoryPayload>
          }
          findMany: {
            args: Prisma.AudioHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioHistoryPayload>[]
          }
          create: {
            args: Prisma.AudioHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioHistoryPayload>
          }
          createMany: {
            args: Prisma.AudioHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudioHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioHistoryPayload>[]
          }
          delete: {
            args: Prisma.AudioHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioHistoryPayload>
          }
          update: {
            args: Prisma.AudioHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioHistoryPayload>
          }
          deleteMany: {
            args: Prisma.AudioHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AudioHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioHistoryPayload>[]
          }
          upsert: {
            args: Prisma.AudioHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioHistoryPayload>
          }
          aggregate: {
            args: Prisma.AudioHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioHistory>
          }
          groupBy: {
            args: Prisma.AudioHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudioHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<AudioHistoryCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    audioTemplate?: AudioTemplateOmit
    audioHistory?: AudioHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Model AudioTemplate
   */

  export type AggregateAudioTemplate = {
    _count: AudioTemplateCountAggregateOutputType | null
    _min: AudioTemplateMinAggregateOutputType | null
    _max: AudioTemplateMaxAggregateOutputType | null
  }

  export type AudioTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    referenceId: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AudioTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    referenceId: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AudioTemplateCountAggregateOutputType = {
    id: number
    name: number
    referenceId: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AudioTemplateMinAggregateInputType = {
    id?: true
    name?: true
    referenceId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AudioTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    referenceId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AudioTemplateCountAggregateInputType = {
    id?: true
    name?: true
    referenceId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AudioTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioTemplate to aggregate.
     */
    where?: AudioTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioTemplates to fetch.
     */
    orderBy?: AudioTemplateOrderByWithRelationInput | AudioTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioTemplates
    **/
    _count?: true | AudioTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioTemplateMaxAggregateInputType
  }

  export type GetAudioTemplateAggregateType<T extends AudioTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioTemplate[P]>
      : GetScalarType<T[P], AggregateAudioTemplate[P]>
  }




  export type AudioTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioTemplateWhereInput
    orderBy?: AudioTemplateOrderByWithAggregationInput | AudioTemplateOrderByWithAggregationInput[]
    by: AudioTemplateScalarFieldEnum[] | AudioTemplateScalarFieldEnum
    having?: AudioTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioTemplateCountAggregateInputType | true
    _min?: AudioTemplateMinAggregateInputType
    _max?: AudioTemplateMaxAggregateInputType
  }

  export type AudioTemplateGroupByOutputType = {
    id: string
    name: string
    referenceId: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: AudioTemplateCountAggregateOutputType | null
    _min: AudioTemplateMinAggregateOutputType | null
    _max: AudioTemplateMaxAggregateOutputType | null
  }

  type GetAudioTemplateGroupByPayload<T extends AudioTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], AudioTemplateGroupByOutputType[P]>
        }
      >
    >


  export type AudioTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    referenceId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["audioTemplate"]>

  export type AudioTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    referenceId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["audioTemplate"]>

  export type AudioTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    referenceId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["audioTemplate"]>

  export type AudioTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    referenceId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AudioTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "referenceId" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["audioTemplate"]>

  export type $AudioTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      referenceId: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["audioTemplate"]>
    composites: {}
  }

  type AudioTemplateGetPayload<S extends boolean | null | undefined | AudioTemplateDefaultArgs> = $Result.GetResult<Prisma.$AudioTemplatePayload, S>

  type AudioTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioTemplateCountAggregateInputType | true
    }

  export interface AudioTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioTemplate'], meta: { name: 'AudioTemplate' } }
    /**
     * Find zero or one AudioTemplate that matches the filter.
     * @param {AudioTemplateFindUniqueArgs} args - Arguments to find a AudioTemplate
     * @example
     * // Get one AudioTemplate
     * const audioTemplate = await prisma.audioTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioTemplateFindUniqueArgs>(args: SelectSubset<T, AudioTemplateFindUniqueArgs<ExtArgs>>): Prisma__AudioTemplateClient<$Result.GetResult<Prisma.$AudioTemplatePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AudioTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioTemplateFindUniqueOrThrowArgs} args - Arguments to find a AudioTemplate
     * @example
     * // Get one AudioTemplate
     * const audioTemplate = await prisma.audioTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioTemplateClient<$Result.GetResult<Prisma.$AudioTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AudioTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioTemplateFindFirstArgs} args - Arguments to find a AudioTemplate
     * @example
     * // Get one AudioTemplate
     * const audioTemplate = await prisma.audioTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioTemplateFindFirstArgs>(args?: SelectSubset<T, AudioTemplateFindFirstArgs<ExtArgs>>): Prisma__AudioTemplateClient<$Result.GetResult<Prisma.$AudioTemplatePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AudioTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioTemplateFindFirstOrThrowArgs} args - Arguments to find a AudioTemplate
     * @example
     * // Get one AudioTemplate
     * const audioTemplate = await prisma.audioTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioTemplateClient<$Result.GetResult<Prisma.$AudioTemplatePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AudioTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioTemplates
     * const audioTemplates = await prisma.audioTemplate.findMany()
     * 
     * // Get first 10 AudioTemplates
     * const audioTemplates = await prisma.audioTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioTemplateWithIdOnly = await prisma.audioTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioTemplateFindManyArgs>(args?: SelectSubset<T, AudioTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioTemplatePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AudioTemplate.
     * @param {AudioTemplateCreateArgs} args - Arguments to create a AudioTemplate.
     * @example
     * // Create one AudioTemplate
     * const AudioTemplate = await prisma.audioTemplate.create({
     *   data: {
     *     // ... data to create a AudioTemplate
     *   }
     * })
     * 
     */
    create<T extends AudioTemplateCreateArgs>(args: SelectSubset<T, AudioTemplateCreateArgs<ExtArgs>>): Prisma__AudioTemplateClient<$Result.GetResult<Prisma.$AudioTemplatePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AudioTemplates.
     * @param {AudioTemplateCreateManyArgs} args - Arguments to create many AudioTemplates.
     * @example
     * // Create many AudioTemplates
     * const audioTemplate = await prisma.audioTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioTemplateCreateManyArgs>(args?: SelectSubset<T, AudioTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AudioTemplates and returns the data saved in the database.
     * @param {AudioTemplateCreateManyAndReturnArgs} args - Arguments to create many AudioTemplates.
     * @example
     * // Create many AudioTemplates
     * const audioTemplate = await prisma.audioTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AudioTemplates and only return the `id`
     * const audioTemplateWithIdOnly = await prisma.audioTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudioTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, AudioTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioTemplatePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AudioTemplate.
     * @param {AudioTemplateDeleteArgs} args - Arguments to delete one AudioTemplate.
     * @example
     * // Delete one AudioTemplate
     * const AudioTemplate = await prisma.audioTemplate.delete({
     *   where: {
     *     // ... filter to delete one AudioTemplate
     *   }
     * })
     * 
     */
    delete<T extends AudioTemplateDeleteArgs>(args: SelectSubset<T, AudioTemplateDeleteArgs<ExtArgs>>): Prisma__AudioTemplateClient<$Result.GetResult<Prisma.$AudioTemplatePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AudioTemplate.
     * @param {AudioTemplateUpdateArgs} args - Arguments to update one AudioTemplate.
     * @example
     * // Update one AudioTemplate
     * const audioTemplate = await prisma.audioTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioTemplateUpdateArgs>(args: SelectSubset<T, AudioTemplateUpdateArgs<ExtArgs>>): Prisma__AudioTemplateClient<$Result.GetResult<Prisma.$AudioTemplatePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AudioTemplates.
     * @param {AudioTemplateDeleteManyArgs} args - Arguments to filter AudioTemplates to delete.
     * @example
     * // Delete a few AudioTemplates
     * const { count } = await prisma.audioTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioTemplateDeleteManyArgs>(args?: SelectSubset<T, AudioTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioTemplates
     * const audioTemplate = await prisma.audioTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioTemplateUpdateManyArgs>(args: SelectSubset<T, AudioTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioTemplates and returns the data updated in the database.
     * @param {AudioTemplateUpdateManyAndReturnArgs} args - Arguments to update many AudioTemplates.
     * @example
     * // Update many AudioTemplates
     * const audioTemplate = await prisma.audioTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AudioTemplates and only return the `id`
     * const audioTemplateWithIdOnly = await prisma.audioTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends AudioTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, AudioTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioTemplatePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AudioTemplate.
     * @param {AudioTemplateUpsertArgs} args - Arguments to update or create a AudioTemplate.
     * @example
     * // Update or create a AudioTemplate
     * const audioTemplate = await prisma.audioTemplate.upsert({
     *   create: {
     *     // ... data to create a AudioTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioTemplate we want to update
     *   }
     * })
     */
    upsert<T extends AudioTemplateUpsertArgs>(args: SelectSubset<T, AudioTemplateUpsertArgs<ExtArgs>>): Prisma__AudioTemplateClient<$Result.GetResult<Prisma.$AudioTemplatePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AudioTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioTemplateCountArgs} args - Arguments to filter AudioTemplates to count.
     * @example
     * // Count the number of AudioTemplates
     * const count = await prisma.audioTemplate.count({
     *   where: {
     *     // ... the filter for the AudioTemplates we want to count
     *   }
     * })
    **/
    count<T extends AudioTemplateCountArgs>(
      args?: Subset<T, AudioTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioTemplateAggregateArgs>(args: Subset<T, AudioTemplateAggregateArgs>): Prisma.PrismaPromise<GetAudioTemplateAggregateType<T>>

    /**
     * Group by AudioTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioTemplateGroupByArgs} args - Group by arguments.
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
      T extends AudioTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioTemplateGroupByArgs['orderBy'] }
        : { orderBy?: AudioTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioTemplate model
   */
  readonly fields: AudioTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AudioTemplate model
   */ 
  interface AudioTemplateFieldRefs {
    readonly id: FieldRef<"AudioTemplate", 'String'>
    readonly name: FieldRef<"AudioTemplate", 'String'>
    readonly referenceId: FieldRef<"AudioTemplate", 'String'>
    readonly description: FieldRef<"AudioTemplate", 'String'>
    readonly createdAt: FieldRef<"AudioTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"AudioTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AudioTemplate findUnique
   */
  export type AudioTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
    /**
     * Filter, which AudioTemplate to fetch.
     */
    where: AudioTemplateWhereUniqueInput
  }

  /**
   * AudioTemplate findUniqueOrThrow
   */
  export type AudioTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
    /**
     * Filter, which AudioTemplate to fetch.
     */
    where: AudioTemplateWhereUniqueInput
  }

  /**
   * AudioTemplate findFirst
   */
  export type AudioTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
    /**
     * Filter, which AudioTemplate to fetch.
     */
    where?: AudioTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioTemplates to fetch.
     */
    orderBy?: AudioTemplateOrderByWithRelationInput | AudioTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioTemplates.
     */
    cursor?: AudioTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioTemplates.
     */
    distinct?: AudioTemplateScalarFieldEnum | AudioTemplateScalarFieldEnum[]
  }

  /**
   * AudioTemplate findFirstOrThrow
   */
  export type AudioTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
    /**
     * Filter, which AudioTemplate to fetch.
     */
    where?: AudioTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioTemplates to fetch.
     */
    orderBy?: AudioTemplateOrderByWithRelationInput | AudioTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioTemplates.
     */
    cursor?: AudioTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioTemplates.
     */
    distinct?: AudioTemplateScalarFieldEnum | AudioTemplateScalarFieldEnum[]
  }

  /**
   * AudioTemplate findMany
   */
  export type AudioTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
    /**
     * Filter, which AudioTemplates to fetch.
     */
    where?: AudioTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioTemplates to fetch.
     */
    orderBy?: AudioTemplateOrderByWithRelationInput | AudioTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioTemplates.
     */
    cursor?: AudioTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioTemplates.
     */
    skip?: number
    distinct?: AudioTemplateScalarFieldEnum | AudioTemplateScalarFieldEnum[]
  }

  /**
   * AudioTemplate create
   */
  export type AudioTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a AudioTemplate.
     */
    data: XOR<AudioTemplateCreateInput, AudioTemplateUncheckedCreateInput>
  }

  /**
   * AudioTemplate createMany
   */
  export type AudioTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioTemplates.
     */
    data: AudioTemplateCreateManyInput | AudioTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudioTemplate createManyAndReturn
   */
  export type AudioTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many AudioTemplates.
     */
    data: AudioTemplateCreateManyInput | AudioTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudioTemplate update
   */
  export type AudioTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a AudioTemplate.
     */
    data: XOR<AudioTemplateUpdateInput, AudioTemplateUncheckedUpdateInput>
    /**
     * Choose, which AudioTemplate to update.
     */
    where: AudioTemplateWhereUniqueInput
  }

  /**
   * AudioTemplate updateMany
   */
  export type AudioTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioTemplates.
     */
    data: XOR<AudioTemplateUpdateManyMutationInput, AudioTemplateUncheckedUpdateManyInput>
    /**
     * Filter which AudioTemplates to update
     */
    where?: AudioTemplateWhereInput
    /**
     * Limit how many AudioTemplates to update.
     */
    limit?: number
  }

  /**
   * AudioTemplate updateManyAndReturn
   */
  export type AudioTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
    /**
     * The data used to update AudioTemplates.
     */
    data: XOR<AudioTemplateUpdateManyMutationInput, AudioTemplateUncheckedUpdateManyInput>
    /**
     * Filter which AudioTemplates to update
     */
    where?: AudioTemplateWhereInput
    /**
     * Limit how many AudioTemplates to update.
     */
    limit?: number
  }

  /**
   * AudioTemplate upsert
   */
  export type AudioTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the AudioTemplate to update in case it exists.
     */
    where: AudioTemplateWhereUniqueInput
    /**
     * In case the AudioTemplate found by the `where` argument doesn't exist, create a new AudioTemplate with this data.
     */
    create: XOR<AudioTemplateCreateInput, AudioTemplateUncheckedCreateInput>
    /**
     * In case the AudioTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioTemplateUpdateInput, AudioTemplateUncheckedUpdateInput>
  }

  /**
   * AudioTemplate delete
   */
  export type AudioTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
    /**
     * Filter which AudioTemplate to delete.
     */
    where: AudioTemplateWhereUniqueInput
  }

  /**
   * AudioTemplate deleteMany
   */
  export type AudioTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioTemplates to delete
     */
    where?: AudioTemplateWhereInput
    /**
     * Limit how many AudioTemplates to delete.
     */
    limit?: number
  }

  /**
   * AudioTemplate without action
   */
  export type AudioTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioTemplate
     */
    select?: AudioTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioTemplate
     */
    omit?: AudioTemplateOmit<ExtArgs> | null
  }


  /**
   * Model AudioHistory
   */

  export type AggregateAudioHistory = {
    _count: AudioHistoryCountAggregateOutputType | null
    _avg: AudioHistoryAvgAggregateOutputType | null
    _sum: AudioHistorySumAggregateOutputType | null
    _min: AudioHistoryMinAggregateOutputType | null
    _max: AudioHistoryMaxAggregateOutputType | null
  }

  export type AudioHistoryAvgAggregateOutputType = {
    duration: number | null
  }

  export type AudioHistorySumAggregateOutputType = {
    duration: number | null
  }

  export type AudioHistoryMinAggregateOutputType = {
    id: string | null
    text: string | null
    audioUrl: string | null
    templateId: string | null
    duration: number | null
    createdAt: Date | null
  }

  export type AudioHistoryMaxAggregateOutputType = {
    id: string | null
    text: string | null
    audioUrl: string | null
    templateId: string | null
    duration: number | null
    createdAt: Date | null
  }

  export type AudioHistoryCountAggregateOutputType = {
    id: number
    text: number
    audioUrl: number
    templateId: number
    duration: number
    createdAt: number
    _all: number
  }


  export type AudioHistoryAvgAggregateInputType = {
    duration?: true
  }

  export type AudioHistorySumAggregateInputType = {
    duration?: true
  }

  export type AudioHistoryMinAggregateInputType = {
    id?: true
    text?: true
    audioUrl?: true
    templateId?: true
    duration?: true
    createdAt?: true
  }

  export type AudioHistoryMaxAggregateInputType = {
    id?: true
    text?: true
    audioUrl?: true
    templateId?: true
    duration?: true
    createdAt?: true
  }

  export type AudioHistoryCountAggregateInputType = {
    id?: true
    text?: true
    audioUrl?: true
    templateId?: true
    duration?: true
    createdAt?: true
    _all?: true
  }

  export type AudioHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioHistory to aggregate.
     */
    where?: AudioHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioHistories to fetch.
     */
    orderBy?: AudioHistoryOrderByWithRelationInput | AudioHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioHistories
    **/
    _count?: true | AudioHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudioHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudioHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioHistoryMaxAggregateInputType
  }

  export type GetAudioHistoryAggregateType<T extends AudioHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioHistory[P]>
      : GetScalarType<T[P], AggregateAudioHistory[P]>
  }




  export type AudioHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioHistoryWhereInput
    orderBy?: AudioHistoryOrderByWithAggregationInput | AudioHistoryOrderByWithAggregationInput[]
    by: AudioHistoryScalarFieldEnum[] | AudioHistoryScalarFieldEnum
    having?: AudioHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioHistoryCountAggregateInputType | true
    _avg?: AudioHistoryAvgAggregateInputType
    _sum?: AudioHistorySumAggregateInputType
    _min?: AudioHistoryMinAggregateInputType
    _max?: AudioHistoryMaxAggregateInputType
  }

  export type AudioHistoryGroupByOutputType = {
    id: string
    text: string
    audioUrl: string
    templateId: string | null
    duration: number
    createdAt: Date
    _count: AudioHistoryCountAggregateOutputType | null
    _avg: AudioHistoryAvgAggregateOutputType | null
    _sum: AudioHistorySumAggregateOutputType | null
    _min: AudioHistoryMinAggregateOutputType | null
    _max: AudioHistoryMaxAggregateOutputType | null
  }

  type GetAudioHistoryGroupByPayload<T extends AudioHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AudioHistoryGroupByOutputType[P]>
        }
      >
    >


  export type AudioHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    audioUrl?: boolean
    templateId?: boolean
    duration?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["audioHistory"]>

  export type AudioHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    audioUrl?: boolean
    templateId?: boolean
    duration?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["audioHistory"]>

  export type AudioHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    audioUrl?: boolean
    templateId?: boolean
    duration?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["audioHistory"]>

  export type AudioHistorySelectScalar = {
    id?: boolean
    text?: boolean
    audioUrl?: boolean
    templateId?: boolean
    duration?: boolean
    createdAt?: boolean
  }

  export type AudioHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "audioUrl" | "templateId" | "duration" | "createdAt", ExtArgs["result"]["audioHistory"]>

  export type $AudioHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      audioUrl: string
      templateId: string | null
      duration: number
      createdAt: Date
    }, ExtArgs["result"]["audioHistory"]>
    composites: {}
  }

  type AudioHistoryGetPayload<S extends boolean | null | undefined | AudioHistoryDefaultArgs> = $Result.GetResult<Prisma.$AudioHistoryPayload, S>

  type AudioHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioHistoryCountAggregateInputType | true
    }

  export interface AudioHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioHistory'], meta: { name: 'AudioHistory' } }
    /**
     * Find zero or one AudioHistory that matches the filter.
     * @param {AudioHistoryFindUniqueArgs} args - Arguments to find a AudioHistory
     * @example
     * // Get one AudioHistory
     * const audioHistory = await prisma.audioHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioHistoryFindUniqueArgs>(args: SelectSubset<T, AudioHistoryFindUniqueArgs<ExtArgs>>): Prisma__AudioHistoryClient<$Result.GetResult<Prisma.$AudioHistoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AudioHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioHistoryFindUniqueOrThrowArgs} args - Arguments to find a AudioHistory
     * @example
     * // Get one AudioHistory
     * const audioHistory = await prisma.audioHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioHistoryClient<$Result.GetResult<Prisma.$AudioHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AudioHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioHistoryFindFirstArgs} args - Arguments to find a AudioHistory
     * @example
     * // Get one AudioHistory
     * const audioHistory = await prisma.audioHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioHistoryFindFirstArgs>(args?: SelectSubset<T, AudioHistoryFindFirstArgs<ExtArgs>>): Prisma__AudioHistoryClient<$Result.GetResult<Prisma.$AudioHistoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AudioHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioHistoryFindFirstOrThrowArgs} args - Arguments to find a AudioHistory
     * @example
     * // Get one AudioHistory
     * const audioHistory = await prisma.audioHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioHistoryClient<$Result.GetResult<Prisma.$AudioHistoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AudioHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioHistories
     * const audioHistories = await prisma.audioHistory.findMany()
     * 
     * // Get first 10 AudioHistories
     * const audioHistories = await prisma.audioHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioHistoryWithIdOnly = await prisma.audioHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioHistoryFindManyArgs>(args?: SelectSubset<T, AudioHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioHistoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AudioHistory.
     * @param {AudioHistoryCreateArgs} args - Arguments to create a AudioHistory.
     * @example
     * // Create one AudioHistory
     * const AudioHistory = await prisma.audioHistory.create({
     *   data: {
     *     // ... data to create a AudioHistory
     *   }
     * })
     * 
     */
    create<T extends AudioHistoryCreateArgs>(args: SelectSubset<T, AudioHistoryCreateArgs<ExtArgs>>): Prisma__AudioHistoryClient<$Result.GetResult<Prisma.$AudioHistoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AudioHistories.
     * @param {AudioHistoryCreateManyArgs} args - Arguments to create many AudioHistories.
     * @example
     * // Create many AudioHistories
     * const audioHistory = await prisma.audioHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioHistoryCreateManyArgs>(args?: SelectSubset<T, AudioHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AudioHistories and returns the data saved in the database.
     * @param {AudioHistoryCreateManyAndReturnArgs} args - Arguments to create many AudioHistories.
     * @example
     * // Create many AudioHistories
     * const audioHistory = await prisma.audioHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AudioHistories and only return the `id`
     * const audioHistoryWithIdOnly = await prisma.audioHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudioHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, AudioHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioHistoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AudioHistory.
     * @param {AudioHistoryDeleteArgs} args - Arguments to delete one AudioHistory.
     * @example
     * // Delete one AudioHistory
     * const AudioHistory = await prisma.audioHistory.delete({
     *   where: {
     *     // ... filter to delete one AudioHistory
     *   }
     * })
     * 
     */
    delete<T extends AudioHistoryDeleteArgs>(args: SelectSubset<T, AudioHistoryDeleteArgs<ExtArgs>>): Prisma__AudioHistoryClient<$Result.GetResult<Prisma.$AudioHistoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AudioHistory.
     * @param {AudioHistoryUpdateArgs} args - Arguments to update one AudioHistory.
     * @example
     * // Update one AudioHistory
     * const audioHistory = await prisma.audioHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioHistoryUpdateArgs>(args: SelectSubset<T, AudioHistoryUpdateArgs<ExtArgs>>): Prisma__AudioHistoryClient<$Result.GetResult<Prisma.$AudioHistoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AudioHistories.
     * @param {AudioHistoryDeleteManyArgs} args - Arguments to filter AudioHistories to delete.
     * @example
     * // Delete a few AudioHistories
     * const { count } = await prisma.audioHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioHistoryDeleteManyArgs>(args?: SelectSubset<T, AudioHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioHistories
     * const audioHistory = await prisma.audioHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioHistoryUpdateManyArgs>(args: SelectSubset<T, AudioHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioHistories and returns the data updated in the database.
     * @param {AudioHistoryUpdateManyAndReturnArgs} args - Arguments to update many AudioHistories.
     * @example
     * // Update many AudioHistories
     * const audioHistory = await prisma.audioHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AudioHistories and only return the `id`
     * const audioHistoryWithIdOnly = await prisma.audioHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends AudioHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, AudioHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioHistoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AudioHistory.
     * @param {AudioHistoryUpsertArgs} args - Arguments to update or create a AudioHistory.
     * @example
     * // Update or create a AudioHistory
     * const audioHistory = await prisma.audioHistory.upsert({
     *   create: {
     *     // ... data to create a AudioHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioHistory we want to update
     *   }
     * })
     */
    upsert<T extends AudioHistoryUpsertArgs>(args: SelectSubset<T, AudioHistoryUpsertArgs<ExtArgs>>): Prisma__AudioHistoryClient<$Result.GetResult<Prisma.$AudioHistoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AudioHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioHistoryCountArgs} args - Arguments to filter AudioHistories to count.
     * @example
     * // Count the number of AudioHistories
     * const count = await prisma.audioHistory.count({
     *   where: {
     *     // ... the filter for the AudioHistories we want to count
     *   }
     * })
    **/
    count<T extends AudioHistoryCountArgs>(
      args?: Subset<T, AudioHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioHistoryAggregateArgs>(args: Subset<T, AudioHistoryAggregateArgs>): Prisma.PrismaPromise<GetAudioHistoryAggregateType<T>>

    /**
     * Group by AudioHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioHistoryGroupByArgs} args - Group by arguments.
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
      T extends AudioHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioHistoryGroupByArgs['orderBy'] }
        : { orderBy?: AudioHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioHistory model
   */
  readonly fields: AudioHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AudioHistory model
   */ 
  interface AudioHistoryFieldRefs {
    readonly id: FieldRef<"AudioHistory", 'String'>
    readonly text: FieldRef<"AudioHistory", 'String'>
    readonly audioUrl: FieldRef<"AudioHistory", 'String'>
    readonly templateId: FieldRef<"AudioHistory", 'String'>
    readonly duration: FieldRef<"AudioHistory", 'Float'>
    readonly createdAt: FieldRef<"AudioHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AudioHistory findUnique
   */
  export type AudioHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AudioHistory to fetch.
     */
    where: AudioHistoryWhereUniqueInput
  }

  /**
   * AudioHistory findUniqueOrThrow
   */
  export type AudioHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AudioHistory to fetch.
     */
    where: AudioHistoryWhereUniqueInput
  }

  /**
   * AudioHistory findFirst
   */
  export type AudioHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AudioHistory to fetch.
     */
    where?: AudioHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioHistories to fetch.
     */
    orderBy?: AudioHistoryOrderByWithRelationInput | AudioHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioHistories.
     */
    cursor?: AudioHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioHistories.
     */
    distinct?: AudioHistoryScalarFieldEnum | AudioHistoryScalarFieldEnum[]
  }

  /**
   * AudioHistory findFirstOrThrow
   */
  export type AudioHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AudioHistory to fetch.
     */
    where?: AudioHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioHistories to fetch.
     */
    orderBy?: AudioHistoryOrderByWithRelationInput | AudioHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioHistories.
     */
    cursor?: AudioHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioHistories.
     */
    distinct?: AudioHistoryScalarFieldEnum | AudioHistoryScalarFieldEnum[]
  }

  /**
   * AudioHistory findMany
   */
  export type AudioHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AudioHistories to fetch.
     */
    where?: AudioHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioHistories to fetch.
     */
    orderBy?: AudioHistoryOrderByWithRelationInput | AudioHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioHistories.
     */
    cursor?: AudioHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioHistories.
     */
    skip?: number
    distinct?: AudioHistoryScalarFieldEnum | AudioHistoryScalarFieldEnum[]
  }

  /**
   * AudioHistory create
   */
  export type AudioHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a AudioHistory.
     */
    data: XOR<AudioHistoryCreateInput, AudioHistoryUncheckedCreateInput>
  }

  /**
   * AudioHistory createMany
   */
  export type AudioHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioHistories.
     */
    data: AudioHistoryCreateManyInput | AudioHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudioHistory createManyAndReturn
   */
  export type AudioHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many AudioHistories.
     */
    data: AudioHistoryCreateManyInput | AudioHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudioHistory update
   */
  export type AudioHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a AudioHistory.
     */
    data: XOR<AudioHistoryUpdateInput, AudioHistoryUncheckedUpdateInput>
    /**
     * Choose, which AudioHistory to update.
     */
    where: AudioHistoryWhereUniqueInput
  }

  /**
   * AudioHistory updateMany
   */
  export type AudioHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioHistories.
     */
    data: XOR<AudioHistoryUpdateManyMutationInput, AudioHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AudioHistories to update
     */
    where?: AudioHistoryWhereInput
    /**
     * Limit how many AudioHistories to update.
     */
    limit?: number
  }

  /**
   * AudioHistory updateManyAndReturn
   */
  export type AudioHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
    /**
     * The data used to update AudioHistories.
     */
    data: XOR<AudioHistoryUpdateManyMutationInput, AudioHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AudioHistories to update
     */
    where?: AudioHistoryWhereInput
    /**
     * Limit how many AudioHistories to update.
     */
    limit?: number
  }

  /**
   * AudioHistory upsert
   */
  export type AudioHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the AudioHistory to update in case it exists.
     */
    where: AudioHistoryWhereUniqueInput
    /**
     * In case the AudioHistory found by the `where` argument doesn't exist, create a new AudioHistory with this data.
     */
    create: XOR<AudioHistoryCreateInput, AudioHistoryUncheckedCreateInput>
    /**
     * In case the AudioHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioHistoryUpdateInput, AudioHistoryUncheckedUpdateInput>
  }

  /**
   * AudioHistory delete
   */
  export type AudioHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
    /**
     * Filter which AudioHistory to delete.
     */
    where: AudioHistoryWhereUniqueInput
  }

  /**
   * AudioHistory deleteMany
   */
  export type AudioHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioHistories to delete
     */
    where?: AudioHistoryWhereInput
    /**
     * Limit how many AudioHistories to delete.
     */
    limit?: number
  }

  /**
   * AudioHistory without action
   */
  export type AudioHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioHistory
     */
    select?: AudioHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioHistory
     */
    omit?: AudioHistoryOmit<ExtArgs> | null
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


  export const AudioTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    referenceId: 'referenceId',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AudioTemplateScalarFieldEnum = (typeof AudioTemplateScalarFieldEnum)[keyof typeof AudioTemplateScalarFieldEnum]


  export const AudioHistoryScalarFieldEnum: {
    id: 'id',
    text: 'text',
    audioUrl: 'audioUrl',
    templateId: 'templateId',
    duration: 'duration',
    createdAt: 'createdAt'
  };

  export type AudioHistoryScalarFieldEnum = (typeof AudioHistoryScalarFieldEnum)[keyof typeof AudioHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AudioTemplateWhereInput = {
    AND?: AudioTemplateWhereInput | AudioTemplateWhereInput[]
    OR?: AudioTemplateWhereInput[]
    NOT?: AudioTemplateWhereInput | AudioTemplateWhereInput[]
    id?: StringFilter<"AudioTemplate"> | string
    name?: StringFilter<"AudioTemplate"> | string
    referenceId?: StringFilter<"AudioTemplate"> | string
    description?: StringNullableFilter<"AudioTemplate"> | string | null
    createdAt?: DateTimeFilter<"AudioTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"AudioTemplate"> | Date | string
  }

  export type AudioTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    referenceId?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AudioTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudioTemplateWhereInput | AudioTemplateWhereInput[]
    OR?: AudioTemplateWhereInput[]
    NOT?: AudioTemplateWhereInput | AudioTemplateWhereInput[]
    name?: StringFilter<"AudioTemplate"> | string
    referenceId?: StringFilter<"AudioTemplate"> | string
    description?: StringNullableFilter<"AudioTemplate"> | string | null
    createdAt?: DateTimeFilter<"AudioTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"AudioTemplate"> | Date | string
  }, "id">

  export type AudioTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    referenceId?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AudioTemplateCountOrderByAggregateInput
    _max?: AudioTemplateMaxOrderByAggregateInput
    _min?: AudioTemplateMinOrderByAggregateInput
  }

  export type AudioTemplateScalarWhereWithAggregatesInput = {
    AND?: AudioTemplateScalarWhereWithAggregatesInput | AudioTemplateScalarWhereWithAggregatesInput[]
    OR?: AudioTemplateScalarWhereWithAggregatesInput[]
    NOT?: AudioTemplateScalarWhereWithAggregatesInput | AudioTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudioTemplate"> | string
    name?: StringWithAggregatesFilter<"AudioTemplate"> | string
    referenceId?: StringWithAggregatesFilter<"AudioTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"AudioTemplate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AudioTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AudioTemplate"> | Date | string
  }

  export type AudioHistoryWhereInput = {
    AND?: AudioHistoryWhereInput | AudioHistoryWhereInput[]
    OR?: AudioHistoryWhereInput[]
    NOT?: AudioHistoryWhereInput | AudioHistoryWhereInput[]
    id?: StringFilter<"AudioHistory"> | string
    text?: StringFilter<"AudioHistory"> | string
    audioUrl?: StringFilter<"AudioHistory"> | string
    templateId?: StringNullableFilter<"AudioHistory"> | string | null
    duration?: FloatFilter<"AudioHistory"> | number
    createdAt?: DateTimeFilter<"AudioHistory"> | Date | string
  }

  export type AudioHistoryOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    audioUrl?: SortOrder
    templateId?: SortOrderInput | SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudioHistoryWhereInput | AudioHistoryWhereInput[]
    OR?: AudioHistoryWhereInput[]
    NOT?: AudioHistoryWhereInput | AudioHistoryWhereInput[]
    text?: StringFilter<"AudioHistory"> | string
    audioUrl?: StringFilter<"AudioHistory"> | string
    templateId?: StringNullableFilter<"AudioHistory"> | string | null
    duration?: FloatFilter<"AudioHistory"> | number
    createdAt?: DateTimeFilter<"AudioHistory"> | Date | string
  }, "id">

  export type AudioHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    audioUrl?: SortOrder
    templateId?: SortOrderInput | SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    _count?: AudioHistoryCountOrderByAggregateInput
    _avg?: AudioHistoryAvgOrderByAggregateInput
    _max?: AudioHistoryMaxOrderByAggregateInput
    _min?: AudioHistoryMinOrderByAggregateInput
    _sum?: AudioHistorySumOrderByAggregateInput
  }

  export type AudioHistoryScalarWhereWithAggregatesInput = {
    AND?: AudioHistoryScalarWhereWithAggregatesInput | AudioHistoryScalarWhereWithAggregatesInput[]
    OR?: AudioHistoryScalarWhereWithAggregatesInput[]
    NOT?: AudioHistoryScalarWhereWithAggregatesInput | AudioHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudioHistory"> | string
    text?: StringWithAggregatesFilter<"AudioHistory"> | string
    audioUrl?: StringWithAggregatesFilter<"AudioHistory"> | string
    templateId?: StringNullableWithAggregatesFilter<"AudioHistory"> | string | null
    duration?: FloatWithAggregatesFilter<"AudioHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AudioHistory"> | Date | string
  }

  export type AudioTemplateCreateInput = {
    id?: string
    name: string
    referenceId: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudioTemplateUncheckedCreateInput = {
    id?: string
    name: string
    referenceId: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudioTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioTemplateCreateManyInput = {
    id?: string
    name: string
    referenceId: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudioTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioHistoryCreateInput = {
    id?: string
    text: string
    audioUrl: string
    templateId?: string | null
    duration: number
    createdAt?: Date | string
  }

  export type AudioHistoryUncheckedCreateInput = {
    id?: string
    text: string
    audioUrl: string
    templateId?: string | null
    duration: number
    createdAt?: Date | string
  }

  export type AudioHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioHistoryCreateManyInput = {
    id?: string
    text: string
    audioUrl: string
    templateId?: string | null
    duration: number
    createdAt?: Date | string
  }

  export type AudioHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AudioTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AudioTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AudioTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AudioHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    audioUrl?: SortOrder
    templateId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioHistoryAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type AudioHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    audioUrl?: SortOrder
    templateId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    audioUrl?: SortOrder
    templateId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioHistorySumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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