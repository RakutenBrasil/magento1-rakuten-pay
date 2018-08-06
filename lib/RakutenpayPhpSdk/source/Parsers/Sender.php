<?php
/**
 ************************************************************************
 * Copyright [2017] [RakutenPay]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ************************************************************************
 */

namespace RakutenPay\Parsers;

use RakutenPay\Domains\Requests\Requests;
use RakutenPay\Helpers\Characters;

/**
 * Class Sender
 * @package RakutenPay\Parsers
 */
trait Sender
{
    /**
     * @param Requests $request
     * @param $properties
     * @return array
     */
    public static function getData(Requests $request, $properties)
    {
        $data = [];
        // sender
        if (!is_null($request->getSender())) {
            if (!is_null($request->getSender()->getName())) {
                $data[$properties::SENDER_NAME] = $request->getSender()->getName();
            }
            if (!is_null($request->getSender()->getEmail())) {
                $data[$properties::SENDER_EMAIL] = $request->getSender()->getEmail();
            }
            // phone
            if (!is_null($request->getSender()->getPhone())) {
                $data = array_merge($data, self::phone($request, $properties));
            }
            // documents
            if (!is_null($request->getSender()->getDocuments())) {
                $data = array_merge($data, self::documents($request, $properties));
            }
            // ip (only used in direct payments)
            if (method_exists($request->getSender(), 'getIp') && !is_null($request->getSender()->getIp())) {
                $data[$properties::SENDER_IP] = $request->getSender()->getIp();
            }
            // hash (only used in direct payments)
            if (method_exists($request->getSender(), 'getHash') && !is_null($request->getSender()->getHash())) {
                $data[$properties::SENDER_HASH] = $request->getSender()->getHash();
            }
        }
        return $data;
    }

    private static function phone($request, $properties)
    {
        $data = [];
        if (!is_null($request->getSender()->getPhone()->getAreaCode())) {
            $data[$properties::SENDER_PHONE_AREA_CODE] = $request->getSender()->getPhone()->getAreaCode();
        }
        if (!is_null($request->getSender()->getPhone()->getNumber())) {
            $data[$properties::SENDER_PHONE_NUMBER] = $request->getSender()->getPhone()->getNumber();
        }
        return $data;
    }

    private static function documents($payment, $properties)
    {
        $data = [];
        $documents = $payment->getSender()->getDocuments();

        if (is_array($documents) && count($documents) == 1) {
            foreach ($documents as $document) {
                if (!is_null($document)) {
                    $document->getType() == "CPF" ?
                        $data[$properties::SENDER_DOCUMENT_CPF] =
                            Characters::hasSpecialChars($document->getIdentifier()) :
                        $data[$properties::SENDER_DOCUMENT_CNPJ] =
                            Characters::hasSpecialChars($document->getIdentifier());
                }
            }
        }
        return $data;
    }
}
