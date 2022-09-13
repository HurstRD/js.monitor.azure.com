/*
 * 1DS JS SDK Core, 3.1.11
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
 * Enums.ts
 * @author Abhilash Panwar (abpanwar)
 * @copyright Microsoft 2018
 * File containing the enums as constants.
 */
import { __assignFn as __assign } from "@microsoft/applicationinsights-shims";
import { _InternalMessageId } from "@microsoft/applicationinsights-core-js";
/**
 * The ValueKind contains a set of values that specify value kind of the property.
 * Either PII (Personal Identifiable Information) or customer content.
 */
export var ValueKind = {
    /**
     * No kind.
     */
    NotSet: 0,
    /**
     * An LDAP distinguished name. For example, CN=Jeff Smith,OU=Sales,DC=Fabrikam,DC=COM.
     */
    Pii_DistinguishedName: 1,
    /**
     * Generic information.
     */
    Pii_GenericData: 2,
    /**
     * An IPV4 Internet address. For example, 192.0.2.1.
     */
    Pii_IPV4Address: 3,
    /**
     * An IPV6 Internet address. For example, 2001:0db8:85a3:0000:0000:8a2e:0370:7334.
     */
    Pii_IPv6Address: 4,
    /**
     * The Subject of an e-mail message.
     */
    Pii_MailSubject: 5,
    /**
     * A telephone number.
     */
    Pii_PhoneNumber: 6,
    /**
     * A query string.
     */
    Pii_QueryString: 7,
    /**
     * An SIP (Session Internet Protocol) address.
     */
    Pii_SipAddress: 8,
    /**
     * An e-mail address.
     */
    Pii_SmtpAddress: 9,
    /**
     * An user ID.
     */
    Pii_Identity: 10,
    /**
     * A URI (Uniform Resource Identifier).
     */
    Pii_Uri: 11,
    /**
     * The fully-qualified domain name.
     */
    Pii_Fqdn: 12,
    /**
     * Scrubs the last octet in a IPV4 Internet address.
     * For example: 10.121.227.147 becomes 10.121.227.*
     */
    Pii_IPV4AddressLegacy: 13,
    /**
     * Generic content.
     */
    CustomerContent_GenericContent: 32
};
/**
 * The EventLatency contains a set of values that specify the latency with which an event is sent.
 */
export var EventLatency = {
    /**
     * Normal latency.
     */
    Normal: 1 /* Normal */,
    /**
     * Cost deferred latency. At the moment this latency is treated as Normal latency.
     */
    CostDeferred: 2 /* CostDeferred */,
    /**
     * Real time latency.
     */
    RealTime: 3 /* RealTime */,
    /**
     * Bypass normal batching/timing and send as soon as possible, this will still send asynchronously.
     * Added in v3.1.1
     */
    Immediate: 4 /* Immediate */
};
/**
 * Enum for property types.
 */
export var EventPropertyType = {
    Unspecified: 0,
    String: 1,
    Int32: 2,
    UInt32: 3,
    Int64: 4,
    UInt64: 5,
    Double: 6,
    Bool: 7,
    Guid: 8,
    DateTime: 9
};
/**
 * The EventPersistence contains a set of values that specify the event's persistence.
 */
export var EventPersistence = {
    /**
     * Normal persistence.
     */
    Normal: 1 /* Normal */,
    /**
     * Critical persistence.
     */
    Critical: 2 /* Critical */
};
/**
 * The TraceLevel contains a set of values that specify the trace level for the trace messages.
 */
export var TraceLevel = {
    /**
     * None.
     */
    NONE: 0,
    /**
     * Error trace.
     */
    ERROR: 1,
    /**
     * Warning trace.
     */
    WARNING: 2,
    /**
     * Information trace.
     */
    INFORMATION: 3
};
export var _ExtendedInternalMessageId = __assign(__assign({}, _InternalMessageId), { AuthHandShakeError: 501, AuthRedirectFail: 502, BrowserCannotReadLocalStorage: 503, BrowserCannotWriteLocalStorage: 504, BrowserDoesNotSupportLocalStorage: 505, CannotParseBiBlobValue: 506, CannotParseDataAttribute: 507, CVPluginNotAvailable: 508, DroppedEvent: 509, ErrorParsingAISessionCookie: 510, ErrorProvidedChannels: 511, FailedToGetCookies: 512, FailedToInitializeCorrelationVector: 513, FailedToInitializeSDK: 514, InvalidContentBlob: 515, InvalidCorrelationValue: 516, SessionRenewalDateIsZero: 517, SendPostOnCompleteFailure: 518, PostResponseHandler: 519, SDKNotInitialized: 520 });
//# sourceMappingURL=Enums.js.map