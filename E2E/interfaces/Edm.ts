// http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part3-csdl.html
export namespace Edm {
    // Binary data
    export type Binary  = string;
    // Binary-valued logic
    export type Boolean  = boolean;
    // Unsigned 8-bit integer
    export type Byte = string;
    // Date without a time-zone offset
    export type Date = string;
    // Date and time with a time-zone offset, no leap seconds
    export type DateTimeOffset  = string;
    // Numeric values with fixed precision and scale
    export type Decimal  = number;
    // IEEE 754 binary64 floating-point number (15-17 decimal digits)
    export type Double  = number;
    // Signed duration in days, hours, minutes, and (sub)seconds
    export type Duration = string;
    // 16-byte (128-bit) unique identifier
    export type Guid  = string;
    // Signed 16-bit integer
    export type Int16 = number
    // Signed 32-bit integer
    export type Int32  = number;
    // Signed 64-bit integer
    export type Int64  = number;
    // Signed 8-bit integer 
    export type SByte = string;
    // IEEE 754 binary32 floating-point number (6-9 decimal digits)
    export type Single  = string;
    // Binary data stream 
    export type Stream  = string;
    // Sequence of UTF-8 characters
    export type String = string;
    // Clock time 00:00-23:59:59.999999999999
    export type TimeOfDay = string;
    // Abstract base type for all Geography types
    export type Geography  = string;
    // A point in a round-earth coordinate system
    export type GeographyPoint  = string;
    // Line string in a round-earth coordinate system
    export type GeographyLineString = string;
    // Polygon in a round-earth coordinate system 
    export type GeographyPolygon = string;
    // Collection of points in a round-earth coordinate system
    export type GeographyMultiPoint = string;
    // Collection of line strings in a round-earth coordinate system
    export type GeographyMultiLineString  = string;
    // Collection of polygons in a round-earth coordinate system
    export type GeographyMultiPolygon = string;
    // Collection of arbitrary Geography values 
    export type GeographyCollection = string;
    // Abstract base type for all Geometry types
    export type Geometry = string;
    // Point in a flat-earth coordinate system
    export type GeometryPoint = string;
    // Line string in a flat-earth coordinate system
    export type GeometryLineString = string;
    // Polygon in a flat-earth coordinate system
    export type GeometryPolygon = string;
    // Collection of points in a flat-earth coordinate system
    export type GeometryMultiPoint = string;
    // Collection of line strings in a flat-earth coordinate system 
    export type GeometryMultiLineString = string;
    // Collection of polygons in a flat-earth coordinate system
    export type GeometryMultiPolygon = string;
    // Collection of arbitrary Geometry values
    export type GeometryCollection = string;
}
