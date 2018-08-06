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

/**
 * Class Basic
 * @package RakutenPay\Parsers
 */
trait Basic
{
    /**
     * @param Requests $request
     * @param $properties
     * @return array
     */
    public static function getData(Requests $request, $properties)
    {
        $data = [];

        // reference
        if (!is_null($request->getReference())) {
            $data[$properties::REFERENCE] = $properties::ORDER_TAG . $request->getReference();
        }
        //amount
        if (method_exists($request, 'getTotal') and !is_null($request->getTotal())) {
            $data[$properties::AMOUNT] = floatval($request->getTotal());
        }
        $data[$properties::CURRENCY] = $request->getCurrency();
        // webrook_url
        if (method_exists($request, 'getRedirectUrl') and !is_null($request->getRedirectUrl())) {
            $data[$properties::REDIRECT_URL] = $request->getRedirectUrl();
        }
        // notificationURL
        if (method_exists($request, 'getNotificationUrl') and !is_null($request->getNotificationUrl())) {
            $data[$properties::NOTIFICATION_URL] = $request->getNotificationUrl();
        }
        // fingerprint
        if (method_exists($request, 'getFingerprint') and !is_null($request->getFingerprint())) {
            $data[$properties::FINGERPRINT] = $request->getFingerprint();
        }
        return $data;
    }
}
