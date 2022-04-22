// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

export as namespace protobuf;

/** Build type */
export const build: string;

/** Reconfigures the library according to the environment. */
export function configure(): void;

/** Wire format reader using `Uint8Array` if available, otherwise `Array`. */
export class Reader {

    /**
     * Constructs a new reader instance using the specified buffer.
     * @param buffer Buffer to read from
     */
    constructor(buffer: Uint8Array);

    /** Read buffer. */
    public buf: Uint8Array;

    /** Read buffer position. */
    public pos: number;

    /** Read buffer length. */
    public len: number;

    /**
     * Creates a new reader using the specified buffer.
     * @param buffer Buffer to read from
     * @returns A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
     * @throws {Error} If `buffer` is not a valid buffer
     */
    public static create(buffer: (Uint8Array|Buffer)): (Reader|BufferReader);

    /**
     * Reads a varint as an unsigned 32 bit value.
     * @returns Value read
     */
    public uint32(): number;

    /**
     * Reads a varint as a signed 32 bit value.
     * @returns Value read
     */
    public int32(): number;

    /**
     * Reads a zig-zag encoded varint as a signed 32 bit value.
     * @returns Value read
     */
    public sint32(): number;

    /**
     * Reads a varint as a signed 64 bit value.
     * @returns Value read
     */
    public int64(): Long;

    /**
     * Reads a varint as an unsigned 64 bit value.
     * @returns Value read
     */
    public uint64(): Long;

    /**
     * Reads a zig-zag encoded varint as a signed 64 bit value.
     * @returns Value read
     */
    public sint64(): Long;

    /**
     * Reads a varint as a boolean.
     * @returns Value read
     */
    public bool(): boolean;

    /**
     * Reads fixed 32 bits as an unsigned 32 bit integer.
     * @returns Value read
     */
    public fixed32(): number;

    /**
     * Reads fixed 32 bits as a signed 32 bit integer.
     * @returns Value read
     */
    public sfixed32(): number;

    /**
     * Reads fixed 64 bits.
     * @returns Value read
     */
    public fixed64(): Long;

    /**
     * Reads zig-zag encoded fixed 64 bits.
     * @returns Value read
     */
    public sfixed64(): Long;

    /**
     * Reads a float (32 bit) as a number.
     * @returns Value read
     */
    public float(): number;

    /**
     * Reads a double (64 bit float) as a number.
     * @returns Value read
     */
    public double(): number;

    /**
     * Reads a sequence of bytes preceeded by its length as a varint.
     * @returns Value read
     */
    public bytes(): Uint8Array;

    /**
     * Reads a string preceeded by its byte length as a varint.
     * @returns Value read
     */
    public string(): string;

    /**
     * Skips the specified number of bytes if specified, otherwise skips a varint.
     * @param [length] Length if known, otherwise a varint is assumed
     * @returns `this`
     */
    public skip(length?: number): Reader;

    /**
     * Skips the next element of the specified wire type.
     * @param wireType Wire type received
     * @returns `this`
     */
    public skipType(wireType: number): Reader;
}

/** Wire format reader using node buffers. */
export class BufferReader extends Reader {

    /**
     * Constructs a new buffer reader instance.
     * @param buffer Buffer to read from
     */
    constructor(buffer: Buffer);

    /**
     * Reads a sequence of bytes preceeded by its length as a varint.
     * @returns Value read
     */
    public bytes(): Buffer;
}

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 */
export interface Buffer extends Uint8Array {
}

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 */
export interface Long {

    /** Low bits */
    low: number;

    /** High bits */
    high: number;

    /** Whether unsigned or not */
    unsigned: boolean;
}

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @returns Set field name, if any
 */
type OneOfGetter = () => (string|undefined);

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @param value Field name
 */
type OneOfSetter = (value: (string|undefined)) => void;

/** Wire format writer using `Uint8Array` if available, otherwise `Array`. */
export class Writer {

    /** Constructs a new writer instance. */
    constructor();

    /** Current length. */
    public len: number;

    /** Operations head. */
    public head: object;

    /** Operations tail */
    public tail: object;

    /** Linked forked states. */
    public states: (object|null);

    /**
     * Creates a new writer.
     * @returns A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
     */
    public static create(): (BufferWriter|Writer);

    /**
     * Allocates a buffer of the specified size.
     * @param size Buffer size
     * @returns Buffer
     */
    public static alloc(size: number): Uint8Array;

    /**
     * Writes an unsigned 32 bit value as a varint.
     * @param value Value to write
     * @returns `this`
     */
    public uint32(value: number): Writer;

    /**
     * Writes a signed 32 bit value as a varint.
     * @param value Value to write
     * @returns `this`
     */
    public int32(value: number): Writer;

    /**
     * Writes a 32 bit value as a varint, zig-zag encoded.
     * @param value Value to write
     * @returns `this`
     */
    public sint32(value: number): Writer;

    /**
     * Writes an unsigned 64 bit value as a varint.
     * @param value Value to write
     * @returns `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    public uint64(value: (Long|number|string)): Writer;

    /**
     * Writes a signed 64 bit value as a varint.
     * @param value Value to write
     * @returns `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    public int64(value: (Long|number|string)): Writer;

    /**
     * Writes a signed 64 bit value as a varint, zig-zag encoded.
     * @param value Value to write
     * @returns `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    public sint64(value: (Long|number|string)): Writer;

    /**
     * Writes a boolish value as a varint.
     * @param value Value to write
     * @returns `this`
     */
    public bool(value: boolean): Writer;

    /**
     * Writes an unsigned 32 bit value as fixed 32 bits.
     * @param value Value to write
     * @returns `this`
     */
    public fixed32(value: number): Writer;

    /**
     * Writes a signed 32 bit value as fixed 32 bits.
     * @param value Value to write
     * @returns `this`
     */
    public sfixed32(value: number): Writer;

    /**
     * Writes an unsigned 64 bit value as fixed 64 bits.
     * @param value Value to write
     * @returns `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    public fixed64(value: (Long|number|string)): Writer;

    /**
     * Writes a signed 64 bit value as fixed 64 bits.
     * @param value Value to write
     * @returns `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    public sfixed64(value: (Long|number|string)): Writer;

    /**
     * Writes a float (32 bit).
     * @param value Value to write
     * @returns `this`
     */
    public float(value: number): Writer;

    /**
     * Writes a double (64 bit float).
     * @param value Value to write
     * @returns `this`
     */
    public double(value: number): Writer;

    /**
     * Writes a sequence of bytes.
     * @param value Buffer or base64 encoded string to write
     * @returns `this`
     */
    public bytes(value: (Uint8Array|string)): Writer;

    /**
     * Writes a string.
     * @param value Value to write
     * @returns `this`
     */
    public string(value: string): Writer;

    /**
     * Forks this writer's state by pushing it to a stack.
     * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
     * @returns `this`
     */
    public fork(): Writer;

    /**
     * Resets this instance to the last state.
     * @returns `this`
     */
    public reset(): Writer;

    /**
     * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
     * @returns `this`
     */
    public ldelim(): Writer;

    /**
     * Finishes the write operation.
     * @returns Finished buffer
     */
    public finish(): Uint8Array;
}

/** Wire format writer using node buffers. */
export class BufferWriter extends Writer {

    /** Constructs a new buffer writer instance. */
    constructor();

    /**
     * Allocates a buffer of the specified size.
     * @param size Buffer size
     * @returns Buffer
     */
    public static alloc(size: number): Buffer;

    /**
     * Finishes the write operation.
     * @returns Finished buffer
     */
    public finish(): Buffer;
}
