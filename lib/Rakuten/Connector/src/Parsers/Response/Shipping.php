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

namespace Rakuten\Connector\Parsers\Response;

use Rakuten\Connector\Resources\Factory\Shipping\Address;
use Rakuten\Connector\Resources\Factory\Shipping\Cost;
use Rakuten\Connector\Resources\Factory\Shipping\Type;

/**
 * Trait Shipping
 * @package Rakuten\Connector\Parsers\Response
 */
trait Shipping
{

    /**
     * @var
     */
    private $shipping;

    /**
     * @return mixed
     */
    public function getShipping()
    {
        return $this->shipping;
    }

    /**
     * @param mixed $shipping
     * @return Response
     */
    public function setShipping($shipping)
    {
        $shippingClass = new \Rakuten\Connector\Domains\Shipping();

        $shippingAddress = new Address($shippingClass);

        $shippingAddress->withParameters(
            current($shipping->address->street),
            current($shipping->address->number),
            current($shipping->address->district),
            current($shipping->address->postalCode),
            current($shipping->address->city),
            current($shipping->address->state),
            current($shipping->address->country),
            current($shipping->address->phone),
            current($shipping->address->complement)
        );

        $shippingType = new Type($shippingClass);
        $shippingType->withParameters(current($shipping->type));

        $shippingCost = new Cost($shippingClass);
        $shippingCost->withParameters(current($shipping->cost));

        $this->shipping = $shippingClass;
        return $this;
    }
}
