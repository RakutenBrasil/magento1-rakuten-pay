<?php
/**
 ************************************************************************
 * Copyright [2018] [RakutenConnector]
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

namespace Rakuten\Connector\Domains\Requests;

use Rakuten\Connector\Helpers\InitializeObject;

/**
 * Trait PaymentMethod
 * @package Rakuten\Connector\Domains\Requests
 */
trait PaymentMethod
{
    private $paymentMethod = array();
    
    public function addPaymentMethod()
    {
        $this->paymentMethod = InitializeObject::Initialize(
            $this->paymentMethod,
            new \Rakuten\Connector\Resources\Factory\Request\PaymentMethod()
        );
        
        return $this->paymentMethod;
    }

    public function setPaymentMethod($paymentMethod)
    {
        if (is_array($paymentMethod)) {
            $arr = array();
            foreach ($paymentMethod as $key => $method) {
                if ($method instanceof \Rakuten\Connector\Domains\PaymentMethod) {
                    $arr[$key] = $method;
                } else {
                    if (is_array($paymentMethod)) {
                        $arr[$key] = new \Rakuten\Connector\Domains\PaymentMethod($method);
                    }
                }
            }
            $this->paymentMethod = $arr;
        }
    }

    public function getPaymentMethod()
    {
        return current($this->paymentMethod);
    }

    public function paymentMethodLenght()
    {
        return count($this->paymentMethod);
    }
}
