// File generated from our OpenAPI spec by Stainless.

import * as Core from 'martian-node/core';
import { APIResource } from 'martian-node/resource';
import { ChatCompletionRunner, ChatCompletionFunctionRunnerParams } from 'martian-node/lib/ChatCompletionRunner';
export { ChatCompletionRunner, ChatCompletionFunctionRunnerParams } from 'martian-node/lib/ChatCompletionRunner';
import {
  ChatCompletionStreamingRunner,
  ChatCompletionStreamingFunctionRunnerParams,
} from 'martian-node/lib/ChatCompletionStreamingRunner';
export {
  ChatCompletionStreamingRunner,
  ChatCompletionStreamingFunctionRunnerParams,
} from 'martian-node/lib/ChatCompletionStreamingRunner';
import { BaseFunctionsArgs } from 'martian-node/lib/RunnableFunction';
export {
  RunnableFunction,
  RunnableFunctions,
  RunnableFunctionWithParse,
  RunnableFunctionWithoutParse,
  ParsingFunction,
  ParsingToolFunction
} from 'martian-node/lib/RunnableFunction';
import { ChatCompletionToolRunnerParams } from 'martian-node/lib/ChatCompletionRunner';
export { ChatCompletionToolRunnerParams } from 'martian-node/lib/ChatCompletionRunner';
import { ChatCompletionStreamingToolRunnerParams } from 'martian-node/lib/ChatCompletionStreamingRunner';
export { ChatCompletionStreamingToolRunnerParams } from 'martian-node/lib/ChatCompletionStreamingRunner';
import { ChatCompletionStream, type ChatCompletionStreamParams } from 'martian-node/lib/ChatCompletionStream';
export { ChatCompletionStream, type ChatCompletionStreamParams } from 'martian-node/lib/ChatCompletionStream';

export class Completions extends APIResource {
  /**
   * @deprecated - use `runTools` instead.
   */
  runFunctions<FunctionsArgs extends BaseFunctionsArgs>(
    body: ChatCompletionFunctionRunnerParams<FunctionsArgs>,
    options?: Core.RequestOptions,
  ): ChatCompletionRunner;
  runFunctions<FunctionsArgs extends BaseFunctionsArgs>(
    body: ChatCompletionStreamingFunctionRunnerParams<FunctionsArgs>,
    options?: Core.RequestOptions,
  ): ChatCompletionStreamingRunner;
  runFunctions<FunctionsArgs extends BaseFunctionsArgs>(
    body:
      | ChatCompletionFunctionRunnerParams<FunctionsArgs>
      | ChatCompletionStreamingFunctionRunnerParams<FunctionsArgs>,
    options?: Core.RequestOptions,
  ): ChatCompletionRunner | ChatCompletionStreamingRunner {
    if (body.stream) {
      return ChatCompletionStreamingRunner.runFunctions(
        this._client.chat.completions,
        body as ChatCompletionStreamingFunctionRunnerParams<FunctionsArgs>,
        options,
      );
    }
    return ChatCompletionRunner.runFunctions(
      this._client.chat.completions,
      body as ChatCompletionFunctionRunnerParams<FunctionsArgs>,
      options,
    );
  }

  /**
   * A convenience helper for using tool calls with the /chat/completions endpoint
   * which automatically calls the JavaScript functions you provide and sends their
   * results back to the /chat/completions endpoint, looping as long as the model
   * requests function calls.
   *
   * For more details and examples, see
   * [the docs](https://github.com/openai/openai-node#automated-function-calls)
   */
  runTools<FunctionsArgs extends BaseFunctionsArgs>(
    body: ChatCompletionToolRunnerParams<FunctionsArgs>,
    options?: Core.RequestOptions,
  ): ChatCompletionRunner;
  runTools<FunctionsArgs extends BaseFunctionsArgs>(
    body: ChatCompletionStreamingToolRunnerParams<FunctionsArgs>,
    options?: Core.RequestOptions,
  ): ChatCompletionStreamingRunner;
  runTools<FunctionsArgs extends BaseFunctionsArgs>(
    body:
      | ChatCompletionToolRunnerParams<FunctionsArgs>
      | ChatCompletionStreamingToolRunnerParams<FunctionsArgs>,
    options?: Core.RequestOptions,
  ): ChatCompletionRunner | ChatCompletionStreamingRunner {
    if (body.stream) {
      return ChatCompletionStreamingRunner.runTools(
        this._client.chat.completions,
        body as ChatCompletionStreamingToolRunnerParams<FunctionsArgs>,
        options,
      );
    }
    return ChatCompletionRunner.runTools(
      this._client.chat.completions,
      body as ChatCompletionToolRunnerParams<FunctionsArgs>,
      options,
    );
  }

  /**
   * Creates a chat completion stream
   */
  stream(body: ChatCompletionStreamParams, options?: Core.RequestOptions): ChatCompletionStream {
    return ChatCompletionStream.createChatCompletion(this._client.chat.completions, body, options);
  }
}
