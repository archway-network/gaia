<!-- This file is auto-generated. Please do not modify it yourself. -->
# Protobuf Documentation
<a name="top"></a>

## Table of Contents

- [gaia/chat/v1beta1/chat.proto](#gaia/chat/v1beta1/chat.proto)
    - [TextMessage](#gaia.chat.v1beta1.TextMessage)
  
- [gaia/chat/v1beta1/ibc.proto](#gaia/chat/v1beta1/ibc.proto)
    - [TextMessagePacketData](#gaia.chat.v1beta1.TextMessagePacketData)
  
- [gaia/chat/v1beta1/query.proto](#gaia/chat/v1beta1/query.proto)
    - [QueryHistoryRequest](#gaia.chat.v1beta1.QueryHistoryRequest)
    - [QueryHistoryResponse](#gaia.chat.v1beta1.QueryHistoryResponse)
  
    - [Query](#gaia.chat.v1beta1.Query)
  
- [gaia/chat/v1beta1/tx.proto](#gaia/chat/v1beta1/tx.proto)
    - [MsgSendTextMessage](#gaia.chat.v1beta1.MsgSendTextMessage)
    - [MsgSendTextMessageResponse](#gaia.chat.v1beta1.MsgSendTextMessageResponse)
  
    - [Msg](#gaia.chat.v1beta1.Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="gaia/chat/v1beta1/chat.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## gaia/chat/v1beta1/chat.proto



<a name="gaia.chat.v1beta1.TextMessage"></a>

### TextMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `source_chain_id` | [string](#string) |  |  |
| `destination_chain_id` | [string](#string) |  |  |
| `id` | [uint64](#uint64) |  |  |
| `from_address` | [string](#string) |  |  |
| `to_address` | [string](#string) |  |  |
| `text` | [string](#string) |  |  |
| `is_delivered` | [bool](#bool) |  |  |
| `send_at` | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="gaia/chat/v1beta1/ibc.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## gaia/chat/v1beta1/ibc.proto



<a name="gaia.chat.v1beta1.TextMessagePacketData"></a>

### TextMessagePacketData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `source_chain_id` | [string](#string) |  |  |
| `id` | [uint64](#uint64) |  |  |
| `from_address` | [string](#string) |  |  |
| `to_address` | [string](#string) |  |  |
| `text` | [string](#string) |  |  |
| `send_at` | [uint64](#uint64) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="gaia/chat/v1beta1/query.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## gaia/chat/v1beta1/query.proto



<a name="gaia.chat.v1beta1.QueryHistoryRequest"></a>

### QueryHistoryRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `participant1_address` | [string](#string) |  |  |
| `participant2_address` | [string](#string) |  |  |






<a name="gaia.chat.v1beta1.QueryHistoryResponse"></a>

### QueryHistoryResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `test_messages` | [TextMessage](#gaia.chat.v1beta1.TextMessage) | repeated |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->


<a name="gaia.chat.v1beta1.Query"></a>

### Query


| Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
| ----------- | ------------ | ------------- | ------------| ------- | -------- |
| `History` | [QueryHistoryRequest](#gaia.chat.v1beta1.QueryHistoryRequest) | [QueryHistoryResponse](#gaia.chat.v1beta1.QueryHistoryResponse) |  | GET|/gaia/chat/v1beta1/history|

 <!-- end services -->



<a name="gaia/chat/v1beta1/tx.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## gaia/chat/v1beta1/tx.proto



<a name="gaia.chat.v1beta1.MsgSendTextMessage"></a>

### MsgSendTextMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `from_address` | [string](#string) |  |  |
| `to_address` | [string](#string) |  |  |
| `ibc_channel_id` | [string](#string) |  |  |
| `ibc_port_id` | [string](#string) |  |  |
| `text` | [string](#string) |  |  |






<a name="gaia.chat.v1beta1.MsgSendTextMessageResponse"></a>

### MsgSendTextMessageResponse






 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->


<a name="gaia.chat.v1beta1.Msg"></a>

### Msg


| Method Name | Request Type | Response Type | Description | HTTP Verb | Endpoint |
| ----------- | ------------ | ------------- | ------------| ------- | -------- |
| `SendTextMessage` | [MsgSendTextMessage](#gaia.chat.v1beta1.MsgSendTextMessage) | [MsgSendTextMessageResponse](#gaia.chat.v1beta1.MsgSendTextMessageResponse) |  | |

 <!-- end services -->



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

